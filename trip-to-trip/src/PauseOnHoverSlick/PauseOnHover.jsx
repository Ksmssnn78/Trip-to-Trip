import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo from '../resources/sun.jpg';
import './PauseOnHover.css';

const PauseOnHover = (props) => {
    

    useEffect(() => {
      if(props.active){
                document.documentElement.style.setProperty('--display-shown-POH', 'hidden');
                document.documentElement.style.setProperty('--image-height-POH', '0rem' );
                document.documentElement.style.setProperty('--title-width-POH', '0rem' );
              }else{
                document.documentElement.style.setProperty('--display-shown-POH', 'visible');
                document.documentElement.style.setProperty('--image-height-POH', '15rem' );
                document.documentElement.style.setProperty('--title-width-POH', '15rem' );
              }
    }, [props.active])
    
       
    
    // const handleClick = () =>{
    //  
    // }
 
     


  var settings = {
    // dots: true,
    // arrow:false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div id="pause-main">
    <h3 id="POH-title">Pause On Hover</h3>
    <Slider {...settings} arrows={false}>
      {/* {
        props.timages.length > 0 && props.timages.map((x) => (
          <div key={x?.id} onClick={handleClick} >
            <img className='c_img' src={x?.url} alt="logo 1"></img>
          </div>
        ))
      } */}
      <div >
        <img className='P_img' src={logo} alt="logo"/>
      </div>
      <div>
        <img className='P_img' src={logo} alt="logo"/>
      </div>
      <div>
        <img className='P_img' src={logo} alt="logo"/>
      </div>
      <div>
        <img className='P_img' src={logo} alt="logo"/>
      </div>
      <div>
        <img className='P_img' src={logo} alt="logo"/>
      </div>
      <div>
        <img className='P_img' src={logo} alt="logo"/>
      </div>
      <div>
        <img className='P_img' src={logo} alt="logo"/>
      </div>
    </Slider>
  </div>
  );
};

export default PauseOnHover;

