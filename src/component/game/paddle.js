function Paddle (path) {
  const img = new Image();
  img.src = path;
  const paddle = {
    img: img,
    x: 0,
    y: 220,
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
function Ball (path) {
  const img = new Image();
  img.src = path;
  const _o = {
    img: img,
    x: 0,
    y: 50,
    speedX: 5,
    speedY: 5,
    fired: false,
  };

  _o.move = function() {
    if (_o.fired) {
      if (_o.x < 0 || (_o.x + _o.img.width) > 400 ) {
        _o.speedX = -_o.speedX;
      }
      if (_o.y < 0 || (_o.y + _o.img.height) > 300 ) {
        _o.speedY = -_o.speedY;
      }
      // move
      _o.x += _o.speedX;
      _o.y += _o.speedY;
    }
  };
  _o.fire = function() {
    _o.fired = true;
  };

  _o.collide = function(obj) {
    if (_o.x > obj.x && _o.x < (obj.x + 400)){
      console.log('collide', obj.x, obj.y);
      // 进入挡板宽度范围
      if (_o.y + _o.img.height >= obj.y) {
        _o.speedY = -_o.speedY;
      }
    }
  };

  return _o;
}

export {
  Paddle,
  Ball
};