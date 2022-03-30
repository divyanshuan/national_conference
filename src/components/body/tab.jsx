import * as React from "react";
import "../../styles/tab.css";
import logo1 from "../../assets/cuh-logo.png";
import logo2 from "../../assets/ssteps.jpg";
import logo3 from "../../assets/logo3.jpg";
import logo4 from "../../assets/logo4.png";
import { Link } from "react-router-dom";

function Tab() {
  return (
    <div className="parent">
      <div className="logo_img">
        <img className="logo" id="logo1" src={logo1} />
        <img className="logo" id="logo2" src={logo2} />
        <img className="logo" id="logo3" src={logo3} />
        <img className="logo" id="logo4" src={logo4} />
      </div>
      <ul className="list">
        <a className="txt_list" href="/">
          <li className="list-elements">
            <p className="txt">Home </p>
          </li>
        </a>
        <a className="txt_list" href="/cfp">
          <li className="list-elements">
            <p className="txt">Call for papers </p>
          </li>
        </a>
        <a className="txt_list" href="/imp">
          <li className="list-elements">
            <p className="txt">Important Dates </p>
          </li>
        </a>
        <a className="txt_list" href="/pap">
          <li className="list-elements">
            <p className="txt">Paper Submissions </p>
          </li>
        </a>
        <a className="txt_list" href="#">
          <li className="list-elements">
            <p className="txt">Fee & Online Regestration </p>
          </li>
        </a>
        <a className="txt_list" href="#">
          <li className="list-elements">
            <p className="txt">Organising committee</p>
          </li>
        </a>
        <a className="txt_list" href="#">
          <li className="list-elements">
            <p className="txt">Keynote Speakers</p>
          </li>
        </a>
        <a className="txt_list" href="#">
          <li className="list-elements">
            <p className="txt">About CUH</p>{" "}
          </li>
        </a>
        <a className="txt_list" href="#">
          <li className="list-elements">
            <p className="txt">Contact Us</p>
          </li>
        </a>
        <a className="txt_list" href="#">
          <li className="list-elements">
            <p className="txt">Previous Conference</p>
          </li>
        </a>
        <a className="txt_list" href="#">
          <li className="list-elements">
            <p className="txt"> How to reach Haryana</p>{" "}
          </li>
        </a>
        <a className="txt_list" href="#">
          <li className="list-elements_last">
            <p className="txt">Accomodation </p>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Tab;
