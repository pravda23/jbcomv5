import Link from "next/link";
import "../styles/App.styles.scss";
import ReactGA from "react-ga4";
import Home from "./Home.component";
import Navbar from "./Navbar";
import Footer from "./Footer.component";
import Music from "./Music.component";
import WebDev from "./WebDev.component";
import Work from "./Work.component";
import About from "./About.component";
import Contact from "./Contact.component";
import FAQ from "./FAQ.component";
import BlogPost from "./BlogPost.component";
import BlogPostList from "./BlogPostList.component";
import NotFound from "./NotFound.component";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import siteInfo from "../data/siteInfo.json";

function App() {
  ReactGA.initialize("G-0FBV9Z3D2X");

  return (
    <>
      <title>{siteInfo.title}</title>
      <div className="content-container">
        <div className="overlay">
          <div className="app-container hiddenscrollbars">
            <div className="flex justify-between items-end mh-6 w-full p-2 mb-2 ">
              <Link className="text-white" href="/">
                <div className="flex flex-col flex-end">JOHN BARTMANN</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
