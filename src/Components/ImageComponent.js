import { useState } from "react";
import Timer from "./Timer";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";


const ImageComponent = (props) => {
  const { img_src, isRunning, setIsRunning } = props; // local image first

  const [clickPos, setClickPos] = useState([0, 0]);
  const [foundItems, setFoundItems] = useState(0);

  // console.log(process.env.REACT_APP_FIREBASE_API_KEY);

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  const db = getFirestore(app);

  // Get a list of cities from your database
  async function getLoc(db) {
    const imgOrd = "img1";
    const charLoc = collection(db, imgOrd);
    const imgSnapshot = await getDocs(charLoc);
    const locList = imgSnapshot.docs.map((doc) => doc.data());
    return locList;
  }

  const clickCoord = (e) => {
    const clickX = e.pageX;
    const clickY = e.pageY;
    const imgRefX = e.target.parentNode.offsetLeft;
    const imgRefY = e.target.parentNode.offsetTop;
    const imgWidth = e.target.offsetWidth;
    const imgHeight = e.target.offsetHeight;
    const scaleX = (clickX - imgRefX) / imgWidth;
    const scaleY = (clickY - imgRefY) / imgHeight;
    console.log("Clicked position x: " + clickX + ", y: " + clickY);
    console.log(imgRefX, imgRefY);
    // checkInBound(scaleX, scaleY);
    // get the name selection button column
    const selectCol = document.querySelector(".selectNameCol");
    selectCol.style.display = "flex";
    selectCol.style.top = (clickY - imgRefY) + "px";
    selectCol.style.left = (clickX - imgRefX) + "px";
    setClickPos([scaleX, scaleY]);
  };

  const checkChar = (e) => {
    const charName = e.target.textContent;
    const clickPoint = clickPos;
    // console.log(e.target.textContent);
    checkInBound(clickPoint, charName, e.target);
  };

  const checkInBound = async (clickPoint, charName, clickedBtn) => {
    const locList = await getLoc(db);
  
    // console.log(locList);
    const item = locList.find((el) => el.name === charName);
    // console.log(item.pos);
    const x = clickPoint[0];
    const y = clickPoint[1];
    const minX = item.pos[0];
    const maxX = item.pos[1];
    const minY = item.pos[2];
    const maxY = item.pos[3];
    if ((x >= minX) & (x <= maxX) & (y >= minY) & (y <= maxY)) {
      console.log("You clicked the character!");
      changeHeadshotBorder(charName);
      // disable button
      clickedBtn.disabled = true;
      clickedBtn.classList.add("correct");
      setFoundItems(foundItems + 1);
      // if clicked the right character, make the selection bar disappear
      setTimeout(() => {
        const selectCol = document.querySelector(".selectNameCol");
        selectCol.style.display = "none";
        clickedBtn.classList.remove("correct");
      }, 1200);
    } else {
      console.log("Nooooo");
      clickedBtn.classList.add("wrong");
      setTimeout(() => {
        clickedBtn.classList.remove("wrong");
      }, 300);
    }
  };

  const changeHeadshotBorder = (charName) => {
    const headshots = document.querySelectorAll(".headshot");
    headshots.forEach((hs) => {
      if (hs.textContent === charName) {
        hs.children[0].style.border = "3px solid green";
      }
    });
  };

  return (
    <div className="image-container">
      <Timer className='timer' foundItems={foundItems} db={db} isRunning={isRunning} setIsRunning={setIsRunning}/>
      <img
        src={process.env.PUBLIC_URL + img_src}
        alt="game image"
        onClick={clickCoord}
      />

      <ul className="selectNameCol">
        <li>
          <button onClick={checkChar}>Whity</button>
        </li>
        <li>
          <button onClick={checkChar}>Greenie</button>
        </li>
        <li>
          <button onClick={checkChar}>Batman</button>
        </li>
      </ul>
    </div>
  );
};

export default ImageComponent;
