import "./App.css";
import Header from "./components/header/header";
// import Bar from "./components/body/bar";
import Home from "./components/body/home";
// import Firstpage from "./components/content/firstpage";
// import Mainbody from "./components/body/mainbody";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CallForPapers from "./components/content/callforpapers";
import ImportantDates from "./components/content/important dates";
import PaperSubmission from "./components/content/papersubmission";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Header />

      {/* <Home />    */}
      {/* <Bar /> */}
      {/* <Mainbody/> */}
      {/* <Firstpage/> */}

      <Router>
        <div className="router-container">{/* <Tab /> */}</div>
        <Switch>
          <div className="home-container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/callforpapers">
              <CallForPapers />
            </Route>
            <Route exact path="/important_dates">
              <ImportantDates />
            </Route>
            <Route exact path="/papers_submission">
              <PaperSubmission />
            </Route>
            <Route exact path="/fee">
              <PaperSubmission />
            </Route>
          </div>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
