"use client";
import { useState, useRef } from "react";
import Navbar from "../components/Navbar.js";
import MusicListPlayer from "./MusicListPlayer.js";
import musicTracks from "../data/musicTracks.json";
import MusicSocials from "./MusicSocials.js";
import MusicSubMenu from "./MusicSubMenu.js";
import MusicIntroText from "./MusicIntroText.js";

import "../styles/App.styles.scss";

const Music = () => {
  const [currentFile, setCurrentFile] = useState();
  const [isPlaying, setIsPlaying] = useState(<false></false>);
  const musicSubmenu = useRef("music-submenu");

  const clickHandle = (e) => {
    setCurrentFile(e);
    setIsPlaying(true);
  };

  return (
    <div>
      <Navbar />
      <div className="single-page-container">
        <MusicSocials />
        <MusicIntroText />
        <MusicListPlayer musicTracks={musicTracks} clickHandle={clickHandle} />
        <MusicSubMenu />
      </div>
    </div>
  );
};

export default Music;
