function Paddle (path) {
  const img = new Image();
  img.src = path;
  const paddle = {
    img: img,
    x: 0,
    y: 50,
    speed: 5,
  };

  paddle.moveLeft = () => {
  };

  paddle.moveRight = () => {
  };



  return paddle;
}

export default Paddle;