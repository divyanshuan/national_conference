import "./App.css";
import Header from "./components/header/header";
import Bar from "./components/body/bar";
import Home from "./components/body/home";
import Mainbody from "./components/body/mainbody";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />   
      <Bar />
      <Mainbody/>
    </div>
  );
}

export default App;
