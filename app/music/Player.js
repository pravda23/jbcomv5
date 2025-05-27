import React, { useState, useEffect, useRef } from "react";

import DownloadModal from "../components/DownloadModal.js";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { PiDiceFiveFill, PiDiceFive } from "react-icons/pi";
import "../styles/MusicListPlayer.styles.css";

const Player = (props) => {
  return (
    <div>
      <div className="wavesurfer-container">
        <div className="wavesurfer-img">
          <div
            className="wavesurfer-img-overlay"
            onClick={() => props.handleAudioPlayPause()}
            // style={{
            //   backgroundImage: `url(${currentImage})`,
            // }}
          >
            {props.currentAudio && props.isLoading ? (
              <div className="animate-spin h-8 w-8 rounded-full border-4 border-t-blue-500 border-gray-300"></div>
            ) : props.isPlaying ? (
              <BsFillPauseFill className="text-4xl hover:scale-125 text-white" />
            ) : (
              <BsFillPlayFill className="text-4xl hover:scale-125 text-white" />
            )}
          </div>
        </div>
        <div className="wavesurfer-waveform">
          <div
            className="text-m"
            style={{ width: "100%" }}
            ref={props.wavesurferRef}
          >
            {props.currentTitle}
          </div>
        </div>
        {/* <Tooltip text="Play random track"> */}
        <div className="relative flex items-center text-4xl m-2 hover:scale-125">
          {/* <span onClick={() => props.selectRandom({ musicTracks })}>
            <PiDiceFive />
          </span> */}
        </div>
        {/* </Tooltip> */}
      </div>
    </div>
  );
};

export default Player;
