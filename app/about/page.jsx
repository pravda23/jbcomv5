import Navbar from "../components/Navbar.js";
import PageHeadingTitle from "../components/PageHeadingTitle.js";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="single-page-container">
        <PageHeadingTitle title={"ABOUT"} />
        <p>
          Hi,
          <br />
          <br />
          ReactJS developer, Creative Commons music producer. My professional
          aim is to continue doing work that satisfies my curiosity.
          <br />
          <br />
          Thanks for stopping by 🙂
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
