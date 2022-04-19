import React from "react";
import Skill from "./Skill";
import imag from "../imgs/loggo2.png";
import "../css/skills.css";

const Skills = () => {
  let skills = ["Python", "django", "javascript", "react", "", ""];
  return (
    <div className="skills-wrapper">
      <div className="text">My Skills</div>
      <div className="skills">
        {skills.map((skill) => (
          <div className="skill">
            <img src={imag} alt="SKILL_IMG" />
            {/* <Skill /> */}
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
