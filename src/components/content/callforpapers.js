import React from "react";
import img123 from "../../assets/powersystem.jpg";
import "../../styles/content_css/callforpaper.css";

const topic = [
  { name: "A", img: img123, dicript: "Power Systm" },
  { name: "B", img: img123, dicript: "Smart Grids" },
  {
    name: "C",
    img: img123,
    dicript: "Signal Processing, Control and Communication Technologies",
  },
  {
    name: "D",
    img: img123,
    dicript: "Energy for Agriculture and rular development",
  },
  { name: "E", img: img123, dicript: "Advanced Power Converter" },
  { name: "F", img: img123, dicript: "Renewawble Energy Resources" },
];
// const Imgcard= (topic)=>{
//   return(

// }
// console.log(Imgcard)

const CallForPapers = () => {
  const topic = [
    { name: "A", img: img123, dicript: "Power System" },
    { name: "B", img: img123, dicript: "Smart Grids" },
    {
      name: "C",
      img: img123,
      dicript: "Signal Processing, Control and Communication Technologies",
    },
    {
      name: "D",
      img: img123,
      dicript: "Energy for Agriculture and rular development",
    },
    { name: "E", img: img123, dicript: "Advanced Power Converter" },
    { name: "F", img: img123, dicript: "Renewawble Energy Resources" },
  ];
  return (
    <>
      <div className="callforpaper">
          { topic ? topic.map((topicdetail) => (
              <>
              <div className="cfp_cardsa">
              <div className="cfp_cards">
                <div class="item uncover">
                  <img className="cfp_img" src={topicdetail.img} alt="image" />
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

{
  /* <img className="topic_image" src={topicdetail.img} alt=""/>
<p className="topic_head">{topicdetail.img}</p> */
}

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
