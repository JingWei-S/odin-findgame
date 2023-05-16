import "./App.css";
import GamePage from "./Components/GamePage";
import Bar from "./Components/Bar";
// import process from "process"; 

function App() {

  return (
    <div className="App">
      <Bar/>
      <GamePage img_src={"/img/game_img.jpeg"} />
    </div>
  );
}

export default App;
