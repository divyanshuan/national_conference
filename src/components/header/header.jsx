import React from "react";
import "../../styles/header.css";
// import bgVideo from "../../assets/sample video.mp4"

function Header() {
  return (
    <div className="return">
      <div className="main_content">
        {/* <video className="head_video" autoPlay muted loop>
            <source src={bgVideo} type="video/mp4"/>
            </video> */}
        <p className="heading">4th International Conference on Energy, Power and Environment  </p>
        <p className="theme">(Theme: Sustinable Technologies for Smart Future)</p>
        <p className="date"> April 29 - May 01, 2022</p>
        <p className="venue"> Venue: Central University of haryana </p>
        <p className="format">Event format: Virtual mode </p>
    

      </div>
    </div>
  );
}
export default Header;
