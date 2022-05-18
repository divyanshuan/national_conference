import React from "react";
import "../../styles/content_css/firstpage.css";
import cuhlogo from "../../assets/cuh-logo.png";
const Firstpage = () => {
  return (
    <>
      <div className="firstpage">
        <h1 className="firstpage_heading">SSTEPS - 2022</h1>
        <div className="firstpage_container">
          <div className="spons1">
            {" "}
            <img className="logo-img" src={cuhlogo} alt="cuh-logo" />{" "}
          </div>
          <div className="paragra">
            <p>
              The 1st International Conference on Smart and Sustainable
              Technologies in Energy and Power Sectors (SSTEPS-2022) is being
              organized by the Department of Electrical Engineering, School of
              Engineering and Technology, Central University of Haryana on
              7th-9th Nov, 2022 at Mahendragarh, Haryana, India. SSTEPS-2022
              will provide an international platform for academicians,
              researchers, industrial experts and technocrafts to discuss and
              share progressive achievements, technical developments and
              limitations in the field of power systems, smart grids, renewable
              energy resources, energy for agriculture and rural growth. Eminent
              persons will be invited as keynote speakers to deliver talks on
              progressive trends and developments in the emerging technologies.
              SSTEPS - 2022 gives a venue for the researchers and technocrafts
              to identify the emerging challenges in the energy and power sector
              and to proceed with investigations. All the accepted papers are
              available in IEEE Xplore Digital Library.
            </p>
          </div>

          <div className="spons2">
            {" "}
            <img className="logo-img" src={cuhlogo} alt="cuh-logo" />{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Firstpage;
