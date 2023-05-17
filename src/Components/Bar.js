import { useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import RankingTable from "./RankingTable";

const Bar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [tableData, setTableData] = useState([]);

  const getRanking = () => {
    const ranks = (async () => {
      const rankingSnapshot = await getDocs(collection(db, 'ranking'));
      const rankList = rankingSnapshot.docs.map((doc) => doc.data());
      console.log(rankList);
      setTableData(rankList);
    })();
    setPopupVisible(!isPopupVisible);
  }


  return (
    <div>
      <div className="headshot-conatiner">
        <div className="headshot">
          <img src={process.env.PUBLIC_URL + "/img/head_whity.png"} alt="whity" />
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
        <button onClick={getRanking}>Leaderboard</button>
        
      </div>
      <RankingTable isPopupVisible={isPopupVisible} setPopupVisible={setPopupVisible} tableData={tableData}/>
    </div>
  );
};

export default Bar;
