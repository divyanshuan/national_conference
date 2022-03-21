import "./App.css";
import Header from "./components/header/header";
import Bar from "./components/body/bar";
import Mainbody from "./components/body/mainbody";

function App() {
  return (
    <div className="App">
      <Header />
      <Bar />
      <Mainbody/>
    </div>
  );
}

export default App;
