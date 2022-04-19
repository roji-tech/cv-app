import React from "react";
import '../css/navbar.css'

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <div className="navbar-heading">NavBar</div>
      <div className="navbar-list">
        <p className="nav">Edit Profile</p>
        <p className="nav">Create New</p>
        <p className="nav">View List</p>
      </div>
    </div>
  );
};

export default NavBar;
