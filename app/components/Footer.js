import {
  FaEnvelope,
  FaArrowRight,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/App.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <a href="mailto:hi@johnbartmann.com" target="_blank">
        <FaEnvelope className="m-1" fontSize="1.5rem" />
      </a>
      <a href="https://wa.link/h4thrk" target="_blank">
        <FaWhatsapp className="m-1" fontSize="1.5rem" />
      </a>
      <a href="https://www.linkedin.com/in/johnbartmann/" target="_blank">
        <FaLinkedin className="m-1" fontSize="1.5rem" />
      </a>
    </div>
  );
};

export default Footer;
