import ImageComponent from "./ImageComponent";
const GamePage = (props) => {
  const { img_src } = props; // local image first

  const BOX = [
    {
      name: "Whity",
      pos: [
        [0.714, 0.823],
        [0.736, 0.840],
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
      name: "Batman",
      pos: [
        [0.545, 0.606],
        [0.599, 0.641],
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
