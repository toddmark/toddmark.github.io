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
          <h1 className="text-danger">新年快乐!</h1>
          <p className="bg-primary">
            这是一个我们共同组建的空间，记录生活，发掘话题以及搞事情等。当然都是原创，技术和素材取决于我们的生活。灵感来源于爱，规划在于未来。
            暂时想到这么多……有啥写啥
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
