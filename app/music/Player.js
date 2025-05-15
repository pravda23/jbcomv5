import React, { useState, useEffect, useRef } from "react";

import DownloadModal from "../components/DownloadModal.js";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
// import Spinner from "../utilities/loading-spinner.js";

// import { PiDiceFiveFill, PiDiceFive } from "react-icons/pi";
import "../styles/MusicListPlayer.styles.css";

const Player = (props) => {
  console.log(props);
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
            {/* {isLoading && <Spinner />} */}

            {!props.isPlaying ? (
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
            ref={props.wavesurferRef}
          >
            {props.currentTitle}
          </div>
        </div>
        {/* <Tooltip text="Play random track"> */}
        <div className="relative flex items-center text-4xl m-2 hover:scale-125">
          <span onClick={() => props.selectRandom({ musicTracks })}>
            {/* <PiDiceFive /> */}
          </span>
        </div>
        {/* </Tooltip> */}
      </div>
    </div>
  );
};

export default Player;
