import React, {Component} from 'react';
import { Router, Route, Link, hashHistory } from 'react-router'

import Nav from '../navbar';
import BinaryTree from './binaryTree';

class Sandbox extends Component{

  constructor(props) {
    super(props)
    this.state = {
      result: []
    }
    this.calc = this.calc.bind(this);
  }

  calc() {
    this.setState({
      result: []
    }, ()=> {
      let count = 0;
      let result = this.state.result;
      for (let i = this.state.from; i <= this.state.to; i += this.state.step) {
        console.log(i)
        let itemResult = {} 
        itemResult.count = count++;
        itemResult.item = i;      
        result.push(itemResult)
      }
      this.setState({
        result: result
      })
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <Nav />
        {this.props.children || "Welcome to your Sandbox"}
        <div style={{marginTop: 10}} className="form-inline row">
          <div className="form-group col-xs-4">
            <label htmlFor="from">From: </label>
            <input id="from" type="text" className="form-control" onChange={(e) => {
              this.setState({
                from: Number(e.target.value)
              })
            }}/>
          </div>
          <div className="form-group col-xs-4">
            <label htmlFor="to">To: </label>
            <input id="to" type="text" className="form-control" onChange={(e) =>{
              this.setState({
                to: Number(e.target.value)
              })
            }}/>
          </div>
          <div className="form-group col-xs-4">
            <label htmlFor="step">Step: </label>
            <input id="step" type="text" className="form-control" onChange={(e) => {
              this.setState({
                step: Number(e.target.value)
              })
            }}/>
          </div>
        </div>
        <button style={{marginTop: 10}} className="btn btn-primary" onClick={this.calc}>Confirm</button>
        <div style={{marginTop: 10}}>{this.state.result.map((item,index)=> {
          return (<p key={index} className="text-primary">第{index+1}次计算： i 的值是{item.item}</p>)
          })}</div>
      </div>
    )
  }
}


export default Sandbox