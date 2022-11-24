import React, { useEffect,useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo from '../resources/sun.jpg';
import './PauseOnHover.css';
import { useNavigate } from "react-router-dom";


const PauseOnHover = (props) => {

  const navigate = useNavigate();

  const [sdata, setsdata] = useState([]);
  
  const getDetails = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setsdata(data);
  }

  useEffect(() => {
     getDetails();
  }, [])
   
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
    
       
    const mouseDown_Coords = e => {
      window.checkForDrag = e.clientX;
    };

    const clickOr_Drag = (e,item) => {
      const mouseUp = e.clientX;
      if (
        mouseUp < window.checkForDrag + 6 &&
        mouseUp > window.checkForDrag - 6
      ) {
        props.select_Data(item);
        navigate('/Booking');

      }
    };
 
     


  var settings = {
    // dots: true,
    // arrow:false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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
      {
        sdata.length > 0 && sdata.map( (data) =>(
          <div onMouseDown={e => mouseDown_Coords(e)} onMouseUp={e => clickOr_Drag(e,data.email)} key={data.id}>
            <img className='P_img' src={logo} alt="logo"/>
            <p>{data.email}</p>
          </div>
        ) )
      }
      {/* 
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
      </div> */}
    </Slider>
  </div>
  );
};

export default PauseOnHover;

