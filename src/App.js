import "./App.css";
import Header from "./components/header/header";
import Bar from "./components/body/bar";
import Home from "./components/body/home";
import Firstpage from "./components/content/firstpage";
// import Mainbody from "./components/body/mainbody";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />   
      <Bar />
      {/* <Mainbody/> */}
      <Firstpage/>

    </div>
  );
}

export default App;
