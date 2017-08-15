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
    paddle.x -= paddle.speed;
  };

  paddle.moveRight = () => {
    paddle.x += paddle.speed;
  };



  return paddle;
}

export default Paddle;