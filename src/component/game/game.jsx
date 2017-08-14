import Paddle from "./paddle.js";

// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Nav from "../navbar";

class Game extends Component {
  componentDidMount() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const paddle = Paddle(require("../img/50.jpg"));
    paddle.img.onload = function () {
      context.drawImage(paddle.img, paddle.x, paddle.y);
    };

    this.windowKeyEvent(context, canvas, paddle);
  }

  windowKeyEvent(context, canvas, paddle) {
    let leftDown = false;
    let rightDown = false;
    setInterval(() => {
      if (leftDown) {
        paddle.x -= paddle.speed;
      }
      if (rightDown) {
        paddle.x += paddle.speed;
      }
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(paddle.img, paddle.x, paddle.y);
    }, 1000/30);
    window.addEventListener("keydown", function (e) {
      let k = e.key;
      switch (k) {
      case "a":
        leftDown = true;
        break;
      case "d":
        rightDown = true;
        break;
      }
    });
    window.addEventListener("keyup", function (e) {
      let k = e.key;
      switch (k) {
      case "a":
        leftDown = false;
        break;
      case "d":
        rightDown = false;
        break;
      }
    });
  }

  render() {
    return (
      <div> <Nav />
        <div>
          <canvas style={{ border: "1px solid #ccc" }} id="canvas" width="400" height="300" />
        </div>
      </div>
    );
  }
}

export default Game;