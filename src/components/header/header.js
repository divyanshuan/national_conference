import React, {useEffect} from "react";
import "../../styles/header.css";
import cuhLogo from '../../assets/cuh-logo.png'
import sstepsLogo from '../../assets/ssteps.jpg'
// import bgVideo from "../../assets/sample video.mp4"

function Header() {
 const hamburger = document.querySelector(".hamburger");
 const navLinks = document.querySelector(".nav-links");
 const links = document.querySelectorAll(".nav-links li");

if(hamburger){
hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
}


  return (
    <>
      <nav>
        {/* <div class="logo">
            <img src={cuhLogo} alt="Logo Image" />
            <img src={sstepsLogo} alt="Logo Image" />
        </div> */}
        <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#">Organising Committee</a></li>
            <li><a href="#">Keynote Speakers</a></li>
            <li><a href="/callforpapers">Call for Papers</a></li>
            <li><a href="#">Local Arrangement</a></li>
            {/* <li><a href="#">About CUH</a></li> */}
            {/* <li><button class="login-button" href="#">Login</button></li> */}
            {/* <li><button className="join-button" href="#">Registration</button></li> */}
        </ul>
    </nav>
    </>
  );
}
export default Header;



// import React from "react";
// import "../../styles/header.css";
// // import bgVideo from "../../assets/sample video.mp4"

// function Header() {
//   return (
//     <div className="return">
//       <div className="main_content">
//         {/* <video className="head_video" autoPlay muted loop>
//             <source src={bgVideo} type="video/mp4"/>
//             </video> */}
//         <p className="heading">1st International Conference on Smart and Sustainable Technologies</p>
//         {/* <p className="theme">(Theme: Sustinable Technologies for Smart Future)</p> */}
//         <p className="date"> 7th Nov - 11th Nov, 2022</p>
//         <p className="venue"> Venue: Dept. of Electrical Engineering, Central University of Haryana, Haryana </p>
//         <p className="venue"> Central University of Haryana, Haryana </p>
//         {/* <p className="format">Event format: Virtual mode </p> */}
    

//       </div>
//     </div>
//   );
// }
// export default Header;
