import React from "react";
import img123 from "../../assets/power_systems.jpg";
import img124 from "../../assets/smartgrid.jpg";
import img126 from "../../assets/agriculture_rular.jpg";
// import img126 from "../../assets/powersystem.jpg";
// import img127 from "../../assets/powersystem.jpg";
// import img128 from "../../assets/powersystem.jpg";

import "../../styles/content_css/callforpaper.css";
import PageBanner from "../common/pageBanner";

// const topic = [
//   { name: "A", img: img123, dicript: "Power Systm" },
//   { name: "B", img: img123, dicript: "Smart Grids" },
//   {
//     name: "C",
//     img: img123,
//     dicript: "Signal Processing, Control and Communication Technologies",
//   },
//   {
//     name: "D",
//     img: img123,
//     dicript: "Energy for Agriculture and rular development",
//   },
//   { name: "E", img: img123, dicript: "Advanced Power Converter" },
//   { name: "F", img: img123, dicript: "Renewawble Energy Resources" },
// ];
// const Imgcard= (topic)=>{
//   return(

// }
// console.log(Imgcard)

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
      <PageBanner
        pageTitle="Call for Papers"
      />

      <div className="callforpaper">
          { topic ? topic.map((topicdetail) => (
              <>
              <div className="cfp_cardsa">
              <div className="cfp_cards">
                <div class="item uncover">
                  <img className="cfp_img" src={topicdetail.img} alt="call for paper" />
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
          )): null}
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
