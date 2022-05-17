import React from "react";
import "../../styles/content_css/orginisingcommittee.css";
// import patronimg from "../../assets/download.png";
import PageBanner from "../common/pageBanner";
import data from "./orginisingcommitteedetail.json";

const Orginisingcommittee = () => {
  console.log(data);

  return (
    <>
      <PageBanner pageTitle="Organizing Committee" />

      <div className="committee-main-container">
        {data.patron.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">Patron</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div>

      <div className="committee-main-container">
        {data.honorarychair.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">Honorary Chair</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div>

      <div className="committee-main-container">
        {data.generalchair.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">General Chair</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.department}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div>

      <div className="committee-main-container">
        {data.programchair.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">Program Chair</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.department}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div>

      {/* <div className="committee-main-container">
        {data.Technicalprogramcommitteechair.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">Technical Program Committee Chair</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.department}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div> */}

      {/* <div className="committee-main-container">
        {data.Technicalprogramcommitteemembers.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">Technical Program Committee Member</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.department}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div> */}

      <div className="committee-main-container">
        {data.Organizingchair.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">Organizing Chair</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.department}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div>

      <div className="committee-main-container">
        {data.Organizingsecretary.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">Organizing Secretary</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.department}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div>

      <div className="committee-main-container">
        {data.organisingcosecretry.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">Organizing Co-Secretary</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.department}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div>

      {/* <div className="committee-main-container">
        {data.Publicityandpublicrelationschair.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">Publicity & Public Relations Chair</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.department}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div>

      <div className="committee-main-container">
        {data.Webadministrator.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">Web Administrator</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.department}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div>

      <div className="committee-main-container">
        {data.Localorganizationcommittee.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">Local Organizing Committee</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.department}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div>

      <div className="committee-main-container">
        {data.Internationaladvisorycommittee.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">International Advisory Committee</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.department}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div>

      <div className="committee-main-container">
        {data.NationalAdvisoryCommittee.map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">National Advisory Committee</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.department}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div>

      <div className="committee-main-container">
        {data["Studentco-ordinator"].map((person) => (
          <>
            <div className="committee-container">
              <img
                className="member_img"
                src={person.image}
                alt="patronimage"
              />
              <h3 className="member_head">{person.name}</h3>
              <p className="member_role">Student Co-ordinator</p>
              <div className="underline"></div>
              <div className="member_role">{person.role}</div>
              <div className="member_role">{person.department}</div>
              <div className="member_role">{person.collage}</div>
              <div className="member_role">{person.location}</div>
            </div>
          </>
        ))}
      </div> */}
    </>
  );
};
export default Orginisingcommittee;
