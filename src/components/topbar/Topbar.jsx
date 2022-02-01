import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Iam-A-Admin </span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <SettingsIcon />
          </div>
          <img
            src={require("../../assets/avatar.svg").default}
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
