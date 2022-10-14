import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Test4.css';
import logo from './sun.jpg';

export default class VerticalMode extends Component {
    slide(y){
        y > 0 ? (
           this.slider.slickPrev()
        ) : (
           this.slider.slickNext()
        )
    }
    componentWillMount(){
        window.addEventListener('wheel', (e) => {
            this.slide(e.wheelDelta);
        })
    }
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
      return (
        <div id="vertical-main">
          <h2>Vertical Mode</h2>
          <Slider {...settings} ref={slider => this.slider = slider }>
            <div>
            <img className="v_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="v_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="v_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="v_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="v_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="v_img" src={logo} alt="logo 1"></img>
            </div>
          </Slider>
        </div>
      );
    }
  }