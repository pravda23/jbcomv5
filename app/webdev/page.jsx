import Navbar from "../components/Navbar.js";
import PageHeadingTitle from "../components/PageHeadingTitle.js";
import Card from "../components/Card.js";
import Footer from "../components/Footer.js";
import devJobs from "../data/devJobs.json";

const WebDev = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="single-page-container">
          <PageHeadingTitle title={"WEB DEVELOPMENT"} margin={"mt-4"} />
          <p>
            Web application development portfolio. Tech stack: ReactJS, Redux,
            TailwindCSS, SCSS, HTML, JS, CSS
          </p>
          {devJobs.map((job) => (
            <Card
              title={job.title}
              description={job.description}
              link={job.link}
              key={job.id}
            />
          ))}
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebDev;
