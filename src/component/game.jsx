// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Nav from "./navbar";

class Game extends Component {
  constructor(props) {
    super(props);
    this.x = 400;
    this.y = 0;
  }

  componentDidMount() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const img = new Image();
    img.src = require("./img/1.jpg");
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };
    this.windowKeyEvent(context, canvas, img);
  }

  windowKeyEvent(context, canvas, img) {
    const self = this;
    window.addEventListener("keydown", function (e) {
      let k = e.key;
      switch (k) {
      case "a":
        self.x -= 10;
        context.clearRect(0, 0, canvas.width, canvas.height);
        console.log(self.x);
        context.drawImage(img, self.x, self.y);
        break;

      case "d":
        break;
      }
    });
  }

  render() {
    let log = console.log.bind(console);
    return (
      <div>
        <Nav />
        <div>
          <canvas style={{ border: "1px solid #ccc" }} id="canvas" width="400" height="300" />
        </div>
      </div>
    );
  }
}

export default Game;