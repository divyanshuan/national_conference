import React from "react";
import "../../styles/content_css/papersubmission.css";
import PageBanner from "../common/pageBanner";
import Table from "react-bootstrap/Table";

const PaperSubmission = () => {
  return (
    <>
      <PageBanner pageTitle="Paper Submission" />
      <div className="papersubmission_main">
        <h3 className="head_author"> Author's Guidelines</h3>
        <p className="para_author">
          {" "}
          Prospective authors are invited to submit full papers (maximum 6 pages
          in IEEE template) in PDF format. The conference paper template can be
          downloaded{" "}
          <a className="atag" href="#">
            here
          </a>
          . Do not temper the prescribed style and formatting. Further details,
          please visit conference website
        </p>
        <h3 className="head_workinglan">Working Language</h3>
        <p className="para_workinglan">
          The working languages of the conference are US or UK English, which
          will be used for all printed material from submission to publication
          and during presentations and discussion as well.
        </p>
        <h3 className="link_paersub">
          For paper submission please{" "}
          <a className="atag" href="#">
            click here
          </a>
        </h3>
      </div>
      <FeeandOnlineReg />
    </>
  );
};
export default PaperSubmission;

const FeeandOnlineReg = () => {
  return (
    <>
      <PageBanner pageTitle="Fee and Online Registration" />
      <div className="feeandonline_main">
        <div className="table_feeandonline">
          
        </div>
        <div className="feeandonline-body">
          <p className="para_feeandonline">
            Additional paper discount is applicable only for regular authors.
            Only one discounted registration is allowed for one IEEE student
            member. Two discounted registrations are allowed for IEEE members.
            For additional pages, Rs. 1000/- (20 USD) is charged for each page
            across all categories.
          </p>
          <h4 className="head_feeandonline">
            Registration: <a className="atag">Link will be updated soon</a>
          </h4>
        </div>
      </div>
    </>
  );
};
