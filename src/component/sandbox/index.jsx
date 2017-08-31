import React, {Component} from "react";
import { Router, Route, Link, hashHistory } from "react-router";

import Nav from "../navbar";
import BinaryTree from "./binaryTree";

class Sandbox extends Component{

  constructor(props) {
    super(props);
    this.state = {
      array: [],
      resultArray: [],
      log: []
    };
    this.bubbleSort  = this.bubbleSort.bind(this);
    this.generate = this.generate.bind(this);
  }

  generate() {
    let array = [1,1,1,1,1,1,1,1,1,1,1].map(()=>{return parseInt(Math.random() * 100);});
    this.setState({
      array: array
    });
  }

  bubbleSort() {
    let targetArray = this.state.array.slice();
    let log = [];
    let count = 0;
    for (let i = 0; i < targetArray.length; i++) {
      for (let j = i + 1; j < targetArray.length; j++) {
        if (targetArray[i] > targetArray[j]) {
          count++;
          let temp = "";
          temp = targetArray[i];
          targetArray[i] = targetArray[j];
          targetArray[j] = temp;
          log.push(`第${count}次交换, 把第${i}位的${targetArray[j]}与第${j}位的${targetArray[i]}互换, 互换后的新数组为${targetArray}`);
          this.setState({
            log: log
          });
        }
      }
    }
    this.setState({
      resultArray: targetArray 
    });
  }


  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <div>  
          {this.props.children || (<h4>Welcome to your Sandbox</h4>)}
        </div>
        <div className="panel panel-primary">
          <div className="panel-heading">Before sort:</div>
          <div className="panel-body">
            {this.state.array.join(",")}
          </div>
        </div>
        <div className="button-group" style={{marginBottom: 20}}>
          <button onClick={this.generate} className="btn btn-primary">generate</button>
          <button onClick={this.bubbleSort}  className="btn btn-primary">Sort</button>
        </div>
        <div className="panel panel-success">
          <div className="panel-heading">After sort:</div>
          <div className="panel-body">
            {this.state.resultArray.join(",")}
          </div>
        </div>
        {this.state.log.map((item)=> {
          return <p>{item}</p>;
        })}
      </div>
    );
  }
}


export default Sandbox;