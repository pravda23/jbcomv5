"use client";
import Navbar from "../components/Navbar.js";
import PageHeadingTitle from "../components/PageHeadingTitle.js";
import workJobs from "../data/workJobs.json";
import Card from "../components/Card.js";

const Work = () => {
  return (
    <div>
      <Navbar />
      <div className="single-page-container">
        <PageHeadingTitle title={"PREVIOUS WORK"} margin={"mt-4"} />
        <p>A wide range of creative work for teams, brands and people.</p>
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
  );
};

export default Work;
