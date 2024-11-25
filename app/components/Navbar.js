"use client";
import React, { useRef } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
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
        <a className="text-white" href="/">
          <div className="flex flex-col flex-end">JOHN BARTMANN</div>
        </a>
        <div className="flex">
          <a href="mailto:hi@johnbartmann.com" target="_blank">
            <FaEnvelope className="m-2" fontSize="1rem" />
          </a>
          <a href="https://wa.link/h4thrk" target="_blank">
            <FaWhatsapp className="m-2" fontSize="1rem" />
          </a>
          <a href="https://www.linkedin.com/in/johnbartmann/" target="_blank">
            <FaLinkedin className="m-2" fontSize="1rem" />
          </a>
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

            <a href="/about">
              <h1 className="btn-nav">ABOUT</h1>
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
