const Bar = () => {
  
  return (
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
      <button>Leaderboard</button>
    </div>
  );
};

export default Bar;
