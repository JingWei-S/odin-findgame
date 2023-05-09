import { useState } from "react";

const ImageComponent = (props) => {
  const { img_src, box } = props; // local image first

  const [ clickPos, setClickPos ] = useState([0, 0]);

  const clickCoord = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    console.log("Clicked position x: " + x + ", y: " + y);
    // checkInBound(x, y);
    // get the name selection button column
    const selectCol = document.querySelector(".selectNameCol");
    selectCol.style.display = "flex";
    selectCol.style.top = y + "px";
    selectCol.style.left = x + "px";
    setClickPos([x, y]);
  };

  const checkChar = (e) => {
    const charName = e.target.textContent;
    const clickPoint = clickPos;
    // console.log(e.target.textContent);
    checkInBound(clickPoint, charName);
  };

  const checkInBound = (clickPoint, charName) => {
    const item = box.find(el => el.name === charName);
    console.log(item.pos)
    const x = clickPoint[0];
    const y = clickPoint[1];
    const minX = item.pos[0][0];
    const maxX = item.pos[1][0];
    const minY = item.pos[0][1];
    const maxY = item.pos[1][1];
    if ((x >= minX) & (x <= maxX) & (y >= minY) & (y <= maxY)) {
      console.log("You clicked the character!");
    } else {
        console.log('Nooooo')
    }
  }

  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + img_src}
        alt="game image"
        onClick={clickCoord}
      />
      {/* <div className="selectNameCol"> */}
      <ul className="selectNameCol">
        <li>
          <button onClick={checkChar}>Flashy</button>
        </li>
        <li>
          <button onClick={checkChar}>Whity</button>
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
