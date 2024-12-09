import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
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
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow p-4">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center my-24">
              <div className="flex justify-center text-4xl">
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
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
