import React from "react";
import Education from "./Education";
import ExperiencesList from "./ExperiencesList";
import Image from "./Image";
import Profile from "./Profile";
import ProfSummary from "./ProfSummary";
import Skills from "./Skills";

import "../css/resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="first">
        <Image />
        <Profile />
      </div>
      <br />
      <br />
      <div>
        <ProfSummary />
      </div>
      <br />
      <br />
      <div>
        <Skills />
      </div>
      <br />
      <br />
      <div>
        <ExperiencesList />{" "}
      </div>
      <br />
      <br />
      <div>
        <Education />
      </div>
    </div>
  );
};

export default Resume;
