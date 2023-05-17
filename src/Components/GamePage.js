import ImageComponent from "./ImageComponent";
import { useState } from "react";

const GamePage = (props) => {
  const { img_src } = props; // local image first
  const [isRunning, setIsRunning] = useState(false);
  const startGame = () => {
    const startCard = document.querySelector('.starter');
    startCard.style.display = 'none';
    
    const imgComponent = document.querySelector('.image-container');
    imgComponent.style.display = 'flex';

    setIsRunning(true);
  }

  return (
    <div className="gameImage">
      <div className="starter">
        <p>Wnat a challenge?</p>
        <p>Select the three characters above as fast as you can!</p>
        <button onClick={startGame}>Start Now</button>
      </div>
      <ImageComponent img_src={img_src} isRunning={isRunning} setIsRunning={setIsRunning}/>
    </div>
  );
};

export default GamePage;
