import "./App.css";
import GamePage from "./Components/GamePage";
import Bar from "./Components/Bar";
// import process from "process"; 

function App() {

  return (
    <div className="App">
      <Bar/>
      <GamePage img_src={"/img/game_img.jpeg"} />
      <footer className="footer">
      <p>© 2023 Find Game. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;
