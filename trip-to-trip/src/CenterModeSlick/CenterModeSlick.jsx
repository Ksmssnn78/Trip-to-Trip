import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CenterModeSlick.css';
import logo from '../resources/sun.jpg';

export default class CenterMode extends Component{
  
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div id="center-main">
        <Slider {...settings}>
          <div>
            <img className="c_img" src={logo} alt="logo 1"></img>
          </div>
          <div>
            <img className="c_img" src={logo} alt="logo 1"></img>
          </div>
          <div>
            <img className="c_img" src={logo} alt="logo 1"></img>
          </div>
          <div>
            <img className="c_img" src={logo} alt="logo 1"></img>
          </div>
          <div>
            <img className="c_img" src={logo} alt="logo 1"></img>
          </div>
          <div>
            <img className="c_img" src={logo} alt="logo 1"></img>
          </div>
        </Slider>
      </div>
    );
  }
}