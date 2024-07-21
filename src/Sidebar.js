import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="SideBar">
      <div className="logoGroup">
        <div className="logo" />
        <div className="name">Light Me Up</div>
      </div>
      <Link className="sideBarLinks" to="/Home">
        Home
      </Link>
      <Link className="sideBarLinks" to="/Lights">
        Lights
      </Link>
      <Link className="sideBarLinks" to="/Settings">
        Settings
      </Link>
      <Link className="sideBarLinks" to="/Notifications">
        Notifications
      </Link>
      <Link className="sideBarLinks" to="/Profile">
        Profile
      </Link>
      <div className="settingsBlock">
        <Link className="sideBarLinks" to="/Settings">
          Sign Out
        </Link>
      </div>
    </div>
  );
}
