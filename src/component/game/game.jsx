import Paddle from "./paddle.js";

// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Nav from "../navbar";

function Stage() {
  const g = {
    actions: {},
    keydowns: {},
  };
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  g.canvas = canvas;
  g.context = context;
  //  draw
  g.drawImage = function(img) {
    g.context.drawImage(img.img, img.x, img.y);
  }
  // events
  window.addEventListener("keydown",(event) =>{
    g.keydowns[event.key] = true;
  });
  window.addEventListener("keyup",(event) =>{
    g.keydowns[event.key] = false;
  });

  // register
  g.actionRegister = function(key, callback) {
    g.actions[key] = callback;
  };

  // timer
  setInterval(() => {
    // events 
    const actions = Object.keys(g.actions);
    for (let i = 0;  i < actions.length; i++) {
      let key = actions[i];
      if (g.keydowns[key])  {
        g.actions[key]();
      }
    }
    // update
    g.update();
    // clear
    g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
    // draw
    g.draw();
  }, 1000 / 30);

  return g;
}

class Game extends Component {
  componentDidMount() {
    const paddle = Paddle(require("../img/50.jpg"));
    const stage = Stage();

    paddle.img.onload = function () {
      stage.context.drawImage(paddle.img, paddle.x, paddle.y);
    };
    // let leftDown = false;
    // let rightDown = false;
    stage.update = function () {
      
    };
    stage.actionRegister("a", function() {
      paddle.moveLeft();
    });
    stage.actionRegister("d", function() {
      paddle.moveRight();
    });
    stage.draw = function () {
      stage.context.drawImage(paddle.img, paddle.x, paddle.y);
    };
    // window.addEventListener("keydown", function (e) {
    //   let k = e.key;
    //   switch (k) {
    //     case "a":
    //       leftDown = true;
    //       break;
    //     case "d":
    //       rightDown = true;
    //       break;
    //   }
    // });
    // window.addEventListener("keyup", function (e) {
    //   let k = e.key;
    //   switch (k) {
    //     case "a":
    //       leftDown = false;
    //       break;
    //     case "d":
    //       rightDown = false;
    //       break;
    //   }
    // });

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