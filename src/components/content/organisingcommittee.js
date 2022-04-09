import React from "react";
import "../../styles/content_css/orginisingcommittee.css";
import patronimg from "../../assets/download.png";
import PageBanner from "../common/pageBanner";
const Orginisingcommittee = () => {
  return (
    <>
      <PageBanner
        pageTitle="Organizing Committee"
      />
      <div className="patron_item">
        <img className="member_img" src={patronimg} alt="patronimage" />
        <h3 className="member_head">Prof. (Dr.) Tankeshwar Kumar</h3>
        <p className="member_role">Patron</p>
        <div className="underline"></div>
        <div className="member_role">Honorable Vice Chancellor</div>
      </div>
      <div className="copatron_item">
        <div className="patron_item" >
          <img className="member_img" src={patronimg} alt="patronimage" />
          <h3 className="member_head">Prof. (Dr.) Tankeshwar Kumar</h3>
          <p className="member_role">Patron</p>
          <div className="underline"></div>
          <div className="member_role">Honorable Vice Chancellor</div>
        </div>
        <div className="patron_item">
          <img className="member_img" src={patronimg} alt="patronimage" />
          <h3 className="member_head">Prof. (Dr.) Tankeshwar Kumar</h3>
          <p className="member_role">Patron</p>
          <div className="underline"></div>
          <div className="member_role">Honorable Vice Chancellor</div>
        </div>
      </div>
    </>
  );
};
export default Orginisingcommittee;
