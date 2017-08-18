function Paddle (path) {
  const img = new Image();
  img.src = path;
  const paddle = {
    img: img,
    x: 0,
    y: 220,
    speed: 15,
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
    // 进入挡板宽度范围
    // paddle: obj,  ball: _o
    if (_o.x >= obj.x && (_o.x + _o.img.width) < (obj.x + obj.img.width)){
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