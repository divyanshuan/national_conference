import "./App.css";
import Header from "./components/header/header";
import Home from "./components/body/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CallForPapers from "./components/content/callforpapers";
import Orginisingcommittee from "./components/content/organisingcommittee";
import KeyNoteSpeakers from "./components/content/keyNoteSpeakers";
import LocalArrangements from "./components/content/localArrangements";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
    <div className="header-container"> 
      <Header />
    </div>

      <Router>
        {/* <div className="router-container"><Tab /></div> */}
        <Switch>
          <div className="home-container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/orginisingcommittee">
              <Orginisingcommittee/>
            </Route>
            <Route exact path="/callforpapers">
              <CallForPapers />
            </Route>
            <Route exact path="/keynote-speakers">
              <KeyNoteSpeakers />
            </Route>
            <Route exact path="/local-arrangements">
              <LocalArrangements />
            </Route>
          </div>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
