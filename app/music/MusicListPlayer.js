import React, { useState, useEffect, useRef } from "react";
import DownloadModal from "../components/DownloadModal.js";
import Tooltip from "../components/Tooltip.js";
import WaveSurfer from "wavesurfer.js";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiDiceFiveFill, PiDiceFive } from "react-icons/pi";
import "../styles/MusicListPlayer.styles.css";

const MusicListPlayer = ({ musicTracks }) => {
  const subdomainUrl = process.env.NEXT_PUBLIC_API_SUBDOMAIN_URL;

  const wavesurferRef = useRef(null);
  const wavesurferObjRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState();
  const [currentTitle, setCurrentTitle] = useState(
    "Select a track from the list"
  );
  const [playingState, setPlayingState] = useState("notStarted");
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadingState, setLoadingState] = useState();
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [abortController, setAbortController] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  musicTracks.sort((a, b) => b.rank - a.rank);

  // const selectRandom = ({ musicTracks }) => {
  //   let selectedTrack =
  //     musicTracks[Math.floor(Math.random() * musicTracks.length)];
  //   setCurrentAudio(`${baseUrl}/track/${selectedTrack.url_slug}-master.mp3`);
  //   setCurrentTitle(selectedTrack.title);
  // };

  useEffect(() => {
    if (currentAudio === undefined) {
      return;
    }

    const wavesurfer = WaveSurfer.create({
      container: wavesurferRef.current,
      waveColor: "white",
      progressColor: "#2665ad",
      // background: "#242424",
      responsive: true,
      height: 1,
      barGap: 0,
      barAlign: "top",
      barWidth: 1,
      // barRadius: 10,
      minPxPerSec: 1,
    });

    wavesurferObjRef.current = wavesurfer;

    wavesurfer.load(currentAudio).catch((error) => {
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
      setPlayingState("play");
      setCurrentTitle(currentTitle);
      setIsPlaying(true);
    });

    wavesurfer.on("pause", () => {
      setPlayingState("pause");
      setIsPlaying(false);
    });

    wavesurfer.on("finish", () => {
      setPlayingState("finish");
      setIsPlaying(false);
    });

    return () => {
      if (wavesurfer && !wavesurfer.isDestroyed) {
        wavesurfer.destroy();
      }
    };
  }, [currentAudio, currentTitle]);

  const handleAudioSelect = ({ musicTrack }) => {
    const apiPath = `/api/track/${musicTrack.url_slug}-master.mp3`;

    if (abortController) {
      abortController.abort(); // Abort any ongoing request
    }

    const controller = new AbortController();
    setAbortController(controller);

    fetch(`${apiPath}`, {
      signal: controller.signal,
    })
      .then((response) => response.blob())
      .then((blob) => {
        const audioURL = URL.createObjectURL(blob);
        console.log("audioURL: " + audioURL);
      })
      .catch((error) => console.error("Audio fetch error:", error));

    // load track
    if (
      currentAudio === `${subdomainUrl}/track/${musicTrack.url_slug}-master.mp3`
    ) {
      if (playingState === "play") {
        wavesurferObjRef.current.pause();
        setIsPlaying(true);
      } else {
        wavesurferObjRef.current.play();
        console.log(wavesurferObjRef.current);
        setIsPlaying(false);
      }
      return;
    }
    setCurrentTitle(musicTrack.title);
    setCurrentAudio(`${subdomainUrl}/track/${musicTrack.url_slug}-master.mp3`);
  };

  const handleAudioPlayPause = () => {
    if (!currentAudio) {
      return;
    } else {
      if (playingState === "play") {
        wavesurferObjRef.current.pause();
        setIsPlaying(true);
      } else if (playingState !== "play") {
        wavesurferObjRef.current.play();
        setIsPlaying(false);
      } else {
        console.log("Error: Unknown state: " + playingState);
      }
    }
  };

  const openModal = (id) => {
    setSelectedTrackId(id);
    console.log(id);
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
                                  onClose={closeModal} // Pass the onClose function to the modal
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
            <div className="wavesurfer-container">
              <div className="wavesurfer-img">
                <div
                  className="wavesurfer-img-overlay"
                  onClick={() => handleAudioPlayPause()}
                  // style={{
                  //   backgroundImage: `url(${currentImage})`,
                  // }}
                >
                  {!isPlaying ? (
                    <BsFillPlayFill className="text-4xl hover:scale-125 text-white" />
                  ) : (
                    <BsFillPauseFill className="text-4xl hover:scale-125 text-white" />
                  )}
                </div>
              </div>
              <div className="wavesurfer-waveform">
                <div
                  className="text-m"
                  style={{ width: "100%" }}
                  ref={wavesurferRef}
                >
                  {currentTitle}
                </div>
              </div>
              {/* <Tooltip text="Play random track"> */}
              <div className="relative flex items-center text-4xl m-2 hover:scale-125">
                <span onClick={() => selectRandom({ musicTracks })}>
                  <PiDiceFive />
                </span>
              </div>
              {/* </Tooltip> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicListPlayer;
