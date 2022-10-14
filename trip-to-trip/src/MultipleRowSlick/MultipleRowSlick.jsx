import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Test3.css';
import logo from './sun.jpg';

export default class MultipleRows extends Component {
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
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        vertical: true,
        verticalSwiping: true,
      };
      return (
        <div id="multiple_main">
          <h2>Multiple Rows</h2>
          <Slider {...settings} ref={slider => this.slider = slider}>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
            <div>
            <img className="m_img" src={logo} alt="logo 1"></img>
            </div>
          </Slider>
        </div>
      );
    }
  }