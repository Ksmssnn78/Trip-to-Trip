import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CenterModeSlick.css';
// import logo from '../resources/sun.jpg';

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const CenterModeSlick = (props) => {
    const [imgs, setImgs] = useState([]);

    const getDetails = async()=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      setImgs(data);
      await delay(5000);
    }

    useEffect(() => {
       getDetails();
    }, [])

    // console.log(imgs);
     const topimages = [];
      for(let i=0;i<10;i++)
          {
            topimages.push(imgs[i]);
          }
        // console.log(topimages);

        const mouseDownCoords = e => {
          window.checkForDrag = e.clientX;
        };

        const clickOrDrag = (e,item) => {
          const mouseUp = e.clientX;
          if (
            mouseUp < window.checkForDrag + 6 &&
            mouseUp > window.checkForDrag - 6
          ) {
            // console.log(e.currentTarget.children[0]);
            console.log(item);
            if(getComputedStyle(document.documentElement).getPropertyValue('--display-shown-CMS') === 'visible'){
              document.documentElement.style.setProperty('--display-shown-CMS', 'hidden');
              document.documentElement.style.setProperty('--image-height-CMS', '0rem' );
              props.isActive(false,topimages);
            }else{
              document.documentElement.style.setProperty('--display-shown-CMS', 'visible');
              document.documentElement.style.setProperty('--image-height-CMS', '18rem' );
              props.isActive(true,topimages);
            }
          }
        };
    
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        swipeToSlide: true
      };
  
  return (
    <div id="center-main"  >
      <h3>select a country</h3>
    <Slider {...settings} id='imgSlider' >
      {
        topimages.length > 0 && topimages.map((item) => (
          <div key={item?.id} onMouseDown={e => mouseDownCoords(e)} onMouseUp={e => clickOrDrag(e,item)}>
          <img className='c_img' src={item?.url} alt="logo 1"></img>
          <p> {item?.title}</p>
          </div>
        ))
      }
    </Slider>
  </div>
  );

};

export default CenterModeSlick;