import Navbar from "../components/Navbar.js";
import {
  FaEnvelope,
  FaArrowRight,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center">
        <div className="mt-10 flex justify-center text-6xl">
          Motivated to deliver.
        </div>
        <div className="mt-4 flex flex-col justify-center items-center text-2xl">
          <Link href="mailto:hi@johnbartmann.com">
            <FaEnvelope className="m-2 p-1" fontSize="2rem" />
          </Link>
          hi@johnbartmann.com
          <Link href="https://wa.link/h4thrk" target="_blank">
            <FaWhatsapp className="m-2 p-1" fontSize="2rem" />
          </Link>
          &nbsp;+2782 217 9116
          <Link
            href="https://www.linkedin.com/in/johnbartmann/"
            target="_blank"
          >
            <FaLinkedin className="m-2 p-1" fontSize="2rem" />
          </Link>
          &nbsp;John Bartmann
        </div>
      </div>
    </>
  );
};

export default Contact;
