// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

import Nav from "../../navbar";

export default class RandomSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divs: "ezbuyisthebest".split(""),
      currentIndex: 0
    };
    this.play = false;
    this.calc = this.calc.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.key === " " && !this.play) {
        this.calc();
      }
    });
  }
  calc() {
    if (this.play) {
      return;
    }
    const time = 200;
    let currentIndex = this.state.currentIndex;
    const getRandom = Math.floor(Math.random() * this.state.divs.length);
    const timer = setInterval(() => {
      console.log(getRandom, currentIndex);
      if (getRandom === currentIndex) {
        clearInterval(timer);
        this.play = false;
      } else {
        this.play = true;
      }
      if (this.play) {
        if (currentIndex === this.state.divs.length - 1) {
          currentIndex = -1;
        }
        currentIndex++;
        this.setState({
          currentIndex
        });
      }
    }, time);
  }

  render() {
    const base = { display: "inline-block", width: 50, height: 50, fontSize: 20, textAlign: "center", lineHeight: "50px"};
    const style = Object.assign({}, base, {background: "#369", border: "1px solid #fff", color: "#fff"});
    const styleChoosed = Object.assign({}, base, { background: "#fff", border: "1px solid #369", color: "#369", fontSize: 20, textAlign: "center" });
    return (
      <div>
        <Nav />
        <div style={{ width: 600, margin: "0 auto" }}>
          {this.state.divs.map((item, index) => {
            return (<div key={index} style={index === this.state.currentIndex ? styleChoosed : style}>{item}</div>);
          })}
          <hr/>
          <button onClick={this.calc}>Select</button>
          {this.state.currentIndex} 
        </div>
      </div>
    );
  }
}
