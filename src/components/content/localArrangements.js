import React from "react";
import "../../styles/content_css/local_arrangement.css";
import PageBanner from "../common/pageBanner";

const LocalArrangements = () => {
  return (
    <>
      <PageBanner pageTitle="Local Arrangements" />
      <div className="keynote-main-about">
        <h1 className="about_haryana"> About Haryana </h1>
        <p className="p-about-haryana">
          The state is rich in history, monuments, heritage, flora and fauna and
          tourism, with a well developed economy, national highways and state
          roads.
        </p>
        <h3 className="location_haryana"> Location</h3>
        <p className="p-location_haryana">
          Haryana surrounds the country's capital New Delhi on three sides
          (north, west and south), consequently a large area of Haryana state is
          included in the economically important National Capital Region of
          India for the purposes of planning and development.
        </p>
      </div>
      <Aboutcuh />
    </>
  );
};
export default LocalArrangements;

const Aboutcuh = () => {
  return (
    <>
      <div className="Aboutcuh_main">
        <h1 className="aboutcuh_head">About Central University of Haryana</h1>
        <p className="p_aboutcuh">
          Central University of Haryana which has been awarded 'A' grade by the
          National Assessment and Accreditation Council (NAAC), is continuously
          developing its capabilities. The university is on the path of
          development with new thinking, mutual cooperation and partnership. The
          university is making special efforts for the education of the students
          as well as for skill development and placement. For this, the facility
          of Training and Placement Centre has also been developed in Gurugram.
          <br />
          <br />
          CUH is moving ahead keeping the goal of all round development of the
          students at the centre. The University is engaged in research,
          research-innovation, skill development as well as developing
          opportunities for employment generation. The University is striving to
          develop necessary modern facilities for the students in the field of
          higher education. In the direction of successful implementation of
          National Education Policy-2020, the university is moving ahead in a
          planned manner and for skill development and employment generation of
          the students, the university is working at the micro level through
          special training and placement centres. CUH is moving towards
          realizing the dream of Self-reliant India, Saksham Bharat & Strong
          India as shown by Prime Minister Shri Narendra Modi.
        </p>
        <h2 className="about_dept"> About Depatrtment</h2>
        <p className="p_about_dept">Comming soon......</p>
      </div>
      <div className="how_to_reach">
        <h1 className="how_to_reach_head">How to Reach</h1>
        <iframe
          className="map_how_to_reach"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.254799000932!2d76.13151241491661!3d28.35114528252978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39129577ce587a0b%3A0xbdc1de187d4dccf9!2sCentral%20University%20of%20Haryana!5e0!3m2!1sen!2sin!4v1649757682279!5m2!1sen!2sin"
        />
      </div>
      <div className="by_air">
        <h1 className="byair_head"> By Air </h1>
        <p className="P_byair">
          Central University of Haryana (CUH) is 137 kilometers away from Indira
          Gandhi International (IGI) Airport and also from domestic airport
          (palam). IGI airport is connected with more than 141 destinations out
          of which 73 are international destinations. It is well connected with
          Delhi Metro as well. For reaching CUH from this airport, delegates
          will have to follow road or rail route. By Rail:- The delegates who
          want to take rail route from IGI airport are suggested to hire taxi
          from airport to Delhi Cantonment railway station as it is the most
          convenient route. There are several trains running from Delhi
          cantonment railway station to Mahendergarh. The delegates who are
          reaching Delhi by rail may catch train to Mahendergarh from Sarai
          Rohilla railway station, Delhi as per their scheduled time from that
          railway station.
        </p>
        <h3 className="bytrain">The time table is given below:-</h3>
        
      </div>
    </>
  );
};
// export default Aboutcuh;
