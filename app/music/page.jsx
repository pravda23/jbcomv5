"use client";
import { useState, useRef } from "react";
import Navbar from "../components/Navbar.js";
import MusicListPlayer from "./MusicListPlayer.js";
import musicTracks from "../data/musicTracks.json";
import MusicSocials from "./MusicSocials.js";
import MusicSubMenu from "./MusicSubMenu.js";
import Footer from "../components/Footer.js";
import "../styles/App.styles.scss";
import siteInfo from "../data/siteInfo.json";

const Music = () => {
  const [currentFile, setCurrentFile] = useState();
  const [isPlaying, setIsPlaying] = useState(<false></false>);
  const musicSubmenu = useRef("music-submenu");

  const clickHandle = (e) => {
    setCurrentFile(e);
    setIsPlaying(true);
  };

  return (
    <>
      <title>{siteInfo.title}</title>
      <div>
        {/* <Navbar /> */}
        <div className="single-page-container">
          <MusicSocials />
          <MusicSubMenu />
          <MusicListPlayer
            musicTracks={musicTracks}
            clickHandle={clickHandle}
          />
        </div>
      </div>
    </>
  );
};

export default Music;
