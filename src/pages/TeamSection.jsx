import React from "react";
import ourteamline from "../assets/images/Group 32.png";
import group25 from "../assets/images/Group 25.png";
import group26 from "../assets/images/Group 26.png";
import group27 from "../assets/images/Group 27.png";
import asset11 from "../assets/images/Asset 8 2.png";

const TeamSection = () => {
  return (
    <>
      <div className="ourteam-section">

        <div className="ourteam-text">
          <h1 className="ourteam-heading" style={{ fontSize: "48px" }}>OUR TEAM</h1>
          <img src={ourteamline} className="ourteamline" alt="" />
        </div>
        <div className="ourteam-img">
          <img src={group25} alt="" />

          <img src={group26} alt="" />
          <img src={group27} alt="" />
        </div>
        <img src={asset11} className="asset11" alt="" />
      </div>
    </>
  );
};

export default TeamSection;