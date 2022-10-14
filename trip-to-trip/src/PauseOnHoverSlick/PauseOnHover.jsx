import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo from './sun.jpg';
import './Test2.css';

export default class PauseOnHover extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      return (
        <div id="pause-main">
          <h2>Pause On Hover</h2>
          <Slider {...settings}>
            <div>
            <img className="P_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="P_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="P_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="P_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="P_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="P_img" src={logo} alt="logo 1"></img>
            </div>
          </Slider>
        </div>
      );
    }
  }