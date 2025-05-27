import React, { useState, useEffect, useRef } from "react";
import DownloadModal from "../components/DownloadModal.js";
import { IoMdDownload } from "react-icons/io";
import Tooltip from "../components/Tooltip.js";
import WaveSurfer from "wavesurfer.js";
import Player from "./Player.js";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { PiYoutubeLogo } from "react-icons/pi";
import "../styles/MusicListPlayer.styles.css";

const MusicListPlayer = ({ musicTracks }) => {
  const trackApiUrl = "/api/track/page?=${musicTrack.url_slug}-master.mp3";

  const subdomainUrl = process.env.NEXT_PUBLIC_API_SUBDOMAIN_URL;

  const wavesurferRef = useRef(null);
  const wavesurferObjRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState();
  const [currentTitle, setCurrentTitle] = useState(null);
  const [playingState, setPlayingState] = useState("notStarted");
  const [isPlaying, setIsPlaying] = useState(false);
  const [wsIsPlaying, setWsIsPlaying] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [abortController, setAbortController] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  musicTracks.sort((a, b) => b.rank - a.rank);

  const selectRandom = ({ musicTracks }) => {
    let selectedTrack =
      musicTracks[Math.floor(Math.random() * musicTracks.length)];
    setCurrentAudio(`${baseUrl}/track/${selectedTrack.url_slug}-master.mp3`);
    setCurrentTitle(selectedTrack.title);
  };

  useEffect(() => {
    if (currentAudio === undefined) {
      return;
    }

    const wavesurfer = WaveSurfer.create({
      container: wavesurferRef.current,
      waveColor: "white",
      progressColor: "#2665ad",
      responsive: true,
      height: 1,
      barGap: 0,
      barAlign: "top",
      barWidth: 1,
      minPxPerSec: 1,
    });

    wavesurfer
      .load(currentAudio)
      // .then(console.log("WS load current audio:", currentAudio))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.error("An error occurred:", error);
        }
      });

    wavesurfer.once("ready", () => {
      wavesurfer.play();
    });

    wavesurfer.on("play", () => {
      // console.log("WS play current audio:", currentAudio);
      setPlayingState("play");
      setCurrentTitle(currentTitle);
      setIsPlaying(true);
    });

    wavesurfer.on("pause", () => {
      // console.log("WS pause current audio:", currentAudio);
      setPlayingState("pause");
      setIsPlaying(false);
    });

    wavesurfer.on("finish", () => {
      // console.log("WS finish audio:", currentAudio);
      setPlayingState("finish");
      setIsPlaying(false);
    });

    wavesurferObjRef.current = wavesurfer;

    return () => {
      if (wavesurfer && !wavesurfer.isDestroyed) {
        wavesurfer.destroy();
      }
    };
  }, [currentAudio, currentTitle]);

  const handleAudioSelect = ({ musicTrack }) => {
    setIsLoading(true);

    if (!musicTrack || !musicTrack.url_slug) {
      console.error(
        "Track information is missing. Invalid track: ",
        musicTrack
      );
      return;
    }

    // prevent multiple fetches in quick succession
    if (abortController) {
      abortController.abort();
    }
    const controller = new AbortController();
    setAbortController(controller);

    fetch(trackApiUrl, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        const audioURL = URL.createObjectURL(blob);
        setCurrentAudio(audioURL);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        }
      })
      .finally(() => setIsLoading(false));

    // load track
    if (currentAudio === `${subdomainUrl}/${musicTrack.url_slug}-master.mp3`) {
      if (playingState === "play") {
        // console.log(wavesurferObjRef.current);
        wavesurferObjRef.current.pause();
        setIsPlaying(true);
        setIsLoading(false);
        // console.log("WS pause current audio " + isLoading);
      } else if (playingState === "pause") {
        wavesurferObjRef.current.play();
        setIsPlaying(false);
      } else {
        // console.log("Error: Unknown state: " + playingState);
      }
      return;
    }

    setCurrentTitle(musicTrack.title);
    setCurrentAudio(`${subdomainUrl}/${musicTrack.url_slug}-master.mp3`);
  };

  const handleAudioPlayPause = () => {
    if (!currentAudio) {
      return;
    } else {
      if (playingState === "play") {
        wavesurferObjRef.current.pause();
        setIsPlaying(false);
      } else if (playingState !== "play") {
        wavesurferObjRef.current.play();
        wavesurferObjRef.current.once("play", () => {
          setIsPlaying(true);
          setIsLoading(false);
        });
      } else {
        console.log("Error: Unknown state: " + playingState);
        // setIsLoading(false);
      }
    }
  };

  const openModal = (id) => {
    setSelectedTrackId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTrackId(null); // Reset selected track ID if necessary
  };

  return (
    <>
      <div className="flex-grow overflow-auto">
        <div className="flex justify-center">
          <div className="flex justify-between">
            <div className="grid grid-cols-[220px_3fr_1fr] gap-2 max-w-screen-lg lg:grid-cols-[520px_3fr_1fr]">
              <div className="text-sm  text-left w-full whitespace-nowrap  ">
                <div className="text-sm text-left -ml-2 font-bold">TITLE</div>
              </div>
              <div className="text-sm  text-left w-full whitespace-nowrap ">
                <div className="text-sm text-left -ml-2 font-bold">FEEL</div>
              </div>
              <div className="text-sm  text-left w-full whitespace-nowrap  ">
                <div className="flex items-center justify-center">
                  <div className="text-sm text-left font-bold">GET</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="audio-list-container">
          <div className="">
            {musicTracks.map((musicTrack) => (
              <div
                className="flex items-justify no-overflow"
                key={musicTrack.id}
              >
                <div
                  className="audio-list-item"
                  onClick={() => handleAudioSelect({ musicTrack })}
                >
                  <div className="flex justify-between">
                    <div className="grid grid-cols-[220px_8fr_1fr] gap-2 max-w-screen-lg lg:grid-cols-[520px_7fr_1fr]">
                      <div className="text-sm text-left w-full whitespace-nowrap overflow-hidden ">
                        {musicTrack.title}
                      </div>
                      <div className="text-sm text-left w-full whitespace-nowrap overflow-hidden">
                        {musicTrack.tag01}
                      </div>
                      <div className="text-sm  text-left w-full whitespace-nowrap overflow-hidden ">
                        <div className="flex items-center justify-center ">
                          {/* DOWNLOAD MODAL */}
                          <div className="flex items-center justify-center">
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                openModal(musicTrack.id);
                              }}
                            >
                              <IoMdDownload />
                            </div>
                            {selectedTrackId === musicTrack.id &&
                              isModalOpen && (
                                <DownloadModal
                                  musicTrack={musicTrack}
                                  onClose={closeModal}
                                />
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Player
              musicTracks={musicTracks}
              isPlaying={isPlaying}
              wavesurferRef={wavesurferRef}
              isModalOpen={isModalOpen}
              selectedTrackId={selectedTrackId}
              playingState={playingState}
              handleAudioPlayPause={handleAudioPlayPause}
              currentTitle={currentTitle}
              currentAudio={currentAudio}
              setCurrentAudio={setCurrentAudio}
              isLoading={isLoading}
              selectRandom={selectRandom}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicListPlayer;
