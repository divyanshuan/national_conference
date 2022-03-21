import "../../styles/mainbody.css";
import Tab from "./tab";
import Home from "../content/home";

function Mainbody() {
  return (
    <div>
      <div className="routing_ele">
        <div className="router-container">
          <Tab/>
        </div>
        <div className="home-container">
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
