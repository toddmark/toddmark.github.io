// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';  

const Carousel = (props) => (
  <div id="carousel-example-generic" className="flex-center-div carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      {props.imgArr.map((item, index) => (
        <div key={index} className={index === 0 ? 'item active' : 'item'}>
          <img className="img" src={item} alt="..." />
          <div className="carousel-caption"> ... </div>
        </div>
      ))}
    </div>
    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Carousel;