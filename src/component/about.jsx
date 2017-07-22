import React, {Component} from 'react';
import Nav from './navbar';

import './about.less';

const imgList = [
  require('./img/1.jpg'),
  require('./img/2.jpg'),
  require('./img/3.jpg'),
  require('./img/4.jpg'),
  require('./img/5.jpg')
]

export default class About extends Component{

  render() {
    return (
      <div>
        <Nav />
        <div className="jumbotron">
          <h1 className="text-danger"></h1>
          <p className="bg-primary">
            ha sikei
          </p>
        </div>
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {imgList.map((item, index) => {
              return (
                <li className={index === 0 ? 'active' : ''} key={index} data-target="#carousel-example-generic" data-slide-to={index}></li>
              )
            })}
          </ol>
          <div className="carousel-inner" role="listbox">
            {imgList.map((item, index) => {
              return(
                <div key={index} className={index === 0 ? 'item active' : 'item'}>
                  <img className="img-responsive" src={imgList[index]} alt="..." />
                  <div className="carousel-caption">
                  </div>
                </div>
              )
            })}
          </div>
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}
