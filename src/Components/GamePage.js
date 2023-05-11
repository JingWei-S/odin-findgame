import ImageComponent from "./ImageComponent";
const GamePage = (props) => {
  const { img_src } = props; // local image first

  const BOX = [
    {
      name: "Whity",
      pos: [
        [785, 1190],
        [810, 1215],
      ],
    },
    {
      name: "Greenie",
      pos: [
        [0.2, 0.53],
        [0.264, 0.56],
      ],
    },
    {
      name: "Red Batman",
      pos: [
        [620, 880],
        [670, 920],
      ],
    },
  ];

  return (
    <div className="gameImage">
      {/* <img src={process.env.PUBLIC_URL+img_src} alt="game image" onClick={clickCoord} /> */}
      <ImageComponent img_src={img_src} box={BOX}/>
    </div>
  );
};

export default GamePage;
