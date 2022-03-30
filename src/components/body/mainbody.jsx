import "../../styles/mainbody.css";
import Tab from "./tab";
import Home from "../content/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CallForPapers from "../content/callforpapers";
import ImportantDates from "../content/important dates";
import PaperSubmission from "../content/papersubmission";

function Mainbody() {
  return (
    <div>
      <div className="routing_ele">
        <Router>
          <div className="router-container">
            <Tab />
          </div>
          <Switch>
            <div className="home-container">
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/cfp">
                <CallForPapers/>
              </Route>
              <Route exact path="/imp">
                <ImportantDates/> 
              </Route>
              <Route exact path="/pap">
                <PaperSubmission/> 
              </Route>
              <Route exact path="/fee">
                <PaperSubmission/> 
              </Route>
            </div>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Mainbody;
