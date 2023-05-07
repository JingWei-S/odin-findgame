import ImageComponent from "./ImageComponent";
const GamePage = (props) => {
  const { img_src } = props; // local image first

  const BOX = [[400, 1480], [480, 1540]];

  return (
    <div>
      {/* <img src={process.env.PUBLIC_URL+img_src} alt="game image" onClick={clickCoord} /> */}
      <ImageComponent img_src={img_src} box={BOX} />
    </div>
  );
};

export default GamePage;
