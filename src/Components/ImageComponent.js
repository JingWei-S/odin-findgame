const ImageComponent = (props) => {
  const { img_src, box } = props; // local image first

  const clickCoord = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    console.log("Clicked position x: " + x + ", y: " + y);
    checkInBound(x, y);
  };

  const checkInBound = (x, y) => {
    const minX = box[0][0];
    const maxX = box[1][0];
    const minY = box[0][1];
    const maxY = box[1][1];
    console.log(box)
    if ((x >= minX) & (x <= maxX) & (y >= minY) & (y <= maxY)) {
      console.log("You clicked the character!");
    } else {
        console.log('Nooooo')
    }
  };

  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + img_src}
        alt="game image"
        onClick={clickCoord}
      />
    </div>
  );
};

export default ImageComponent;
