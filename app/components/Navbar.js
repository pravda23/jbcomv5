"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/App.styles.scss";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Navbar = () => {
  const leftChevron = useRef(null);
  const rightChevron = useRef(null);
  function goLeft() {
    leftChevron.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  function goRight() {
    rightChevron.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <div className="flex justify-between items-end mh-6 w-full p-2 mb-2 ">
        <Link className="text-white" href="/">
          <div className="flex flex-col flex-end text-2xl font-bold">
            JOHN BARTMANN
          </div>
        </Link>
        <div className="flex">
          <Link href="mailto:hi@johnbartmann.com" target="_blank">
            <FaEnvelope className="m-2" fontSize="1rem" />
          </Link>
          <Link href="https://wa.link/h4thrk" target="_blank">
            <FaWhatsapp className="m-2" fontSize="1rem" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/johnbartmann/"
            target="_blank"
          >
            <FaLinkedin className="m-2" fontSize="1rem" />
          </Link>
          <Link href="https://github.com/pravda23/" target="_blank">
            <FaGithub className="m-2" fontSize="1rem" />
          </Link>
        </div>
      </div>

      <div className="navbar-container hiddenscrollbars">
        <div className="navbar-nochevron-left"></div>
        <div className="navbar-chevron-left" onMouseOver={goLeft}>
          <BsChevronLeft size={20} opacity={0.3} />
        </div>

        <div className="navbar">
          <div className="navbar-links-container hiddenscrollbars">
            <a href="/work">
              <h1 className="btn-nav" ref={leftChevron}>
                WORK
              </h1>
            </a>
            <a href="/webdev">
              {" "}
              <h1 className="btn-nav">WEB DEV</h1>
            </a>
            <a href="/music">
              {" "}
              <h1 className="btn-nav">MUSIC</h1>
            </a>

            <a ref={rightChevron} href="/contact">
              {" "}
              <h1 className="btn-nav">CONTACT</h1>
            </a>
          </div>
        </div>

        {/* <div className="navbar-scroll-anchor-right"></div> */}

        <div className="navbar-chevron-right" onMouseOver={goRight}>
          <BsChevronRight size={20} opacity={0.3} />
        </div>
        <div className="navbar-nochevron-right"></div>
      </div>
    </>
  );
};
export default Navbar;
