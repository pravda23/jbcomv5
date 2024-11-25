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
          I'm a South African ReactJS developer, Creative Commons music producer
          and all-round creative person with a broad career history, solid
          technical skills and in-depth knowledge of industry-standard digital
          publishing platforms. My professional aim is to continue doing work
          that satisfies my curiosity.
          <br />
          <br />
          Thanks for stopping by 🙂
          <br />
          <br />
          John
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
