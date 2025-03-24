import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBandcamp } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import PageHeadingTitle from "../components/PageHeadingTitle.js";

const MusicSocials = () => {
  return (
    <>
      <div className="music-socials mt-2 flex flex-col sm:flex-row items-center justify-between border-b-2 border-slate-200">
        <div>
          <PageHeadingTitle title={"MUSIC"} />
        </div>
        <div className="flex items-center">
          <a href="https://youtube.com/johnbartmannmusic" target="_blank">
            <FaYoutube className="m-2 hover:scale-125 w-8 h-8 text-white" />
          </a>
          <a href="https://johnbartmann.bsky.social" target="_blank">
            <FaBluesky className="m-2 hover:scale-125 w-7 h-7 text-white" />
          </a>

          <a
            href="https://open.spotify.com/artist/3ZkQ69zxOePFLOGLj0N15C"
            target="_blank"
          >
            <FaSpotify className="m-2 hover:scale-125 w-8 h-8 text-white" />
          </a>
          <a href="https://johnbartmann.bandcamp.com/" target="_blank">
            <FaBandcamp className="m-2 hover:scale-125 w-8 h-8 text-white" />
          </a>
          <a
            href="https://music.apple.com/us/artist/john-bartmann/1081298778"
            target="_blank"
          >
            <FaApple className="m-2 hover:scale-125 w-8 h-8 text-white" />
          </a>
          <div
            style={{ display: "inline", margin: ".4rem" }}
            className="m-2 hover:scale-125 w-8 text-white"
          >
            <a href="https://patreon.com/johnbartmann">
              <svg
                width="1.5rem"
                height="1.5rem"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
              >
                <g fill="#ffffff">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M489.7 153.8c-.1-65.4-51-119-110.7-138.3C304.8-8.5 207-5 136.1 28.4C50.3 68.9 23.3 157.7 22.3 246.2C21.5 319 28.7 510.6 136.9 512c80.3 1 92.3-102.5 129.5-152.3c26.4-35.5 60.5-45.5 102.4-55.9c72-17.8 121.1-74.7 121-150z" />
                  </svg>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicSocials;
