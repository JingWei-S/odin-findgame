import ImageComponent from "./ImageComponent";
const GamePage = (props) => {
  const { img_src } = props; // local image first

  const BOX = [
    {
      name: "Flashy",
      pos: [
        [400, 1480],
        [480, 1540],
      ],
    },
    {
      name: "Whity",
      pos: [
        [1345, 290],
        [1405, 365],
      ],
    },
    {
      name: "Red Batman",
      pos: [
        [990, 1665],
        [1040, 1770],
      ],
    },
  ];

  return (
    <div className="gameImage">
      {/* <img src={process.env.PUBLIC_URL+img_src} alt="game image" onClick={clickCoord} /> */}
      <ImageComponent img_src={img_src} box={BOX} />
    </div>
  );
};

export default GamePage;
