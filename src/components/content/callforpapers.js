import React from "react";
import img123 from "../../assets/power_systems.jpg";
import img124 from "../../assets/smartgrid.jpg";
import img126 from "../../assets/agriculture_rular.jpg";
import "../../styles/content_css/callforpaper.css";
import PageBanner from "../common/pageBanner";

const CallForPapers = () => {
  const topic = [
    { name: "A", img: img123, dicript: "Power System" },
    { name: "B", img: img124, dicript: "Smart Grids" },
    {
      name: "C",
      img: img123,
      dicript: "Signal Processing, Control and Communication Technologies",
    },
    {
      name: "D",
      img: img126,
      dicript: "Energy for Agriculture and rular development",
    },
    { name: "E", img: img123, dicript: "Advanced Power Converter" },
    { name: "F", img: img123, dicript: "Renewawble Energy Resources" },
  ];
  return (
    <>
      <PageBanner pageTitle="Call for Papers" />

      <div className="callforpaper">
        <div className="call-for-paper-intro">
        <p>
          The SSTEPS 2022 International Conference on Smart and Sustainable
          Technologies in Energy and Power Systems will feature invited talks by
          distinguished Scientists and Engineers as well as Paper Presentations
          and Poster Sessions. Distinguished speakers deliberate the latest
          developments in power and energy sectors for sustainable developments.
          The scope of the conference is as follows but not limited to.
        </p>
        </div>
        {topic
          ? topic.map((topicdetail) => (
              <>
                <div className="cfp_cardsa">
                  <div className="cfp_cards">
                    <div class="item uncover">
                      <img
                        className="cfp_img"
                        src={topicdetail.img}
                        alt="call for paper"
                      />
                      <div class="overlay">
                        {/* <span>''</span> */}
                        <span>{topicdetail.dicript}</span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
          : null}
      </div>
    </>
  );
};

export default CallForPapers;

// {topic
//   ? topic.map((item) => {
//       <>
//         <div className="cfp_cards">
//           <img src={item.img} alt="profice picture" />
//         </div>
//         <p className="detail_member">{item.dicript}</p>
//       </>;
//     })
//   : null}
