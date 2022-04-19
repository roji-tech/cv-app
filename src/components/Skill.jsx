import React from "react";

const Skill = ({title,image}) => {
  return (
    <div>
      <img src={image} alt="" />
      <div>{title}</div>
    </div>
  );
};

export default Skill;
