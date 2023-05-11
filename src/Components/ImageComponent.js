import { useState } from "react";

const ImageComponent = (props) => {
  const { img_src, box } = props; // local image first

  const [clickPos, setClickPos] = useState([0, 0]);

  const clickCoord = (e) => {
    const clickX = e.pageX;
    const clickY = e.pageY;
    const imgRefX = e.target.offsetLeft;
    const imgRefY = e.target.offsetTop;
    const imgWidth = e.target.offsetWidth;
    const imgHeight = e.target.offsetHeight;
    const scaleX = (clickX - imgRefX) / imgWidth;
    const scaleY = (clickY - imgRefY) / imgHeight;
    console.log("Clicked position x: " + scaleX + ", y: " + scaleY);
    // checkInBound(scaleX, scaleY);
    // get the name selection button column
    const selectCol = document.querySelector(".selectNameCol");
    selectCol.style.display = "flex";
    selectCol.style.top = clickY + "px";
    selectCol.style.left = clickX + "px";
    setClickPos([scaleX, scaleY]);
  };

  const checkChar = (e) => {
    const charName = e.target.textContent;
    const clickPoint = clickPos;
    // console.log(e.target.textContent);
    checkInBound(clickPoint, charName);
  };

  const checkInBound = (clickPoint, charName) => {
    const item = box.find((el) => el.name === charName);
    console.log(item.pos);
    const x = clickPoint[0];
    const y = clickPoint[1];
    const minX = item.pos[0][0];
    const maxX = item.pos[1][0];
    const minY = item.pos[0][1];
    const maxY = item.pos[1][1];
    if ((x >= minX) & (x <= maxX) & (y >= minY) & (y <= maxY)) {
      console.log("You clicked the character!");
      changeHeadshotBorder(charName);
    } else {
      console.log("Nooooo");
    }
  };

  const changeHeadshotBorder = (charName) => {
    const headshots = document.querySelectorAll(".headshot");
    console.log(headshots);
  }

  return (
    <div className="image-container">
      <div className="headshot-conatiner">
        <div className="headshot">
          <img
            src={process.env.PUBLIC_URL + "/img/head_whity.png"}
            alt="whity"
          />
          <p>Whity</p>
        </div>
        <div className="headshot">
          <img
            src={process.env.PUBLIC_URL + "/img/head_greenie.png"}
            alt="greenie"
          />
          <p>Greenie</p>
        </div>
        <div className="headshot">
          <img
            src={process.env.PUBLIC_URL + "/img/head_batman.png"}
            alt="batman"
          />
          <p>Batman</p>
        </div>
      </div>
      <img
        src={process.env.PUBLIC_URL + img_src}
        alt="game image"
        onClick={clickCoord}
      />
      {/* <div className="selectNameCol"> */}
      <ul className="selectNameCol">
        <li>
          <button onClick={checkChar}>Whity</button>
        </li>
        <li>
          <button onClick={checkChar}>Greenie</button>
        </li>
        <li>
          <button onClick={checkChar}>Red Batman</button>
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
};

export default ImageComponent;
