import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <div className="navbar-heading">NavBar</div>
      <div className="navbar-list">
        <p className="nav">Edit Profile</p>
        {/* <Link to={'new'}> */}
          <p className="nav">Create New</p>
        {/* </Link> */}
        <p className="nav">View List</p>
      </div>
    </div>
  );
};

export default NavBar;
