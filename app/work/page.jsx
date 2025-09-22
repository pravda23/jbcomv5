"use client";
import Navbar from "../components/Navbar.js";
import PageHeadingTitle from "../components/PageHeadingTitle.js";
import Footer from "../components/Footer.js";
import workJobs from "../data/workJobs.json";
import Card from "../components/Card.js";
import siteInfo from "../data/siteInfo.json";

const Work = () => {
  return (
    <>
      <title>{siteInfo.title}</title>
      <div>
        <Navbar />
        <div className="single-page-container">
          <PageHeadingTitle title={"PREVIOUS WORK"} margin={"mt-4"} />
          <p>
            A wide range of technical and creative work for companies, teams and
            people.
          </p>
          {workJobs.map((job) => (
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

export default Work;
