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
      const response = await fetch('http://localhost:5000/countries');
      const data = await response.json();
      setImgs(data);
      await delay(5000);
    }

    useEffect(() => {
       getDetails();
    }, [])

    // console.log(imgs);
     //const topimages = [];
      // for(let i=0;i<10;i++)
      //     {
      //       topimages.push(imgs[i]);
      //     }
        // console.log(topimages);

        const mouseDownCoords = e => {
          window.checkForDrag = e.clientX;
        };

        const clickOrDrag = (e,cname) => {
          const mouseUp = e.clientX;
          if (
            mouseUp < window.checkForDrag + 6 &&
            mouseUp > window.checkForDrag - 6
          ) {
            // console.log(e.currentTarget.children[0]);
            // console.log(item);
            if(getComputedStyle(document.documentElement).getPropertyValue('--display-shown-CMS') === 'visible'){
              document.documentElement.style.setProperty('--display-shown-CMS', 'hidden');
              document.documentElement.style.setProperty('--image-height-CMS', '0rem' );
              props.isActive(false,cname);
            }else{
              document.documentElement.style.setProperty('--display-shown-CMS', 'visible');
              document.documentElement.style.setProperty('--image-height-CMS', '18rem' );
              props.isActive(true,cname);
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
      <h3 id="center-title-main">Select A Country</h3>
    <Slider {...settings} id='imgSlider' >
      {
        imgs.length > 0 && imgs.map((item) => (
          <div key={item?._id} onMouseDown={e => mouseDownCoords(e)} onMouseUp={e => clickOrDrag(e,item?.c_name)}>
          <img className='c_img' src={"data:image/jpeg;base64," + item?.imageinfo.image} alt="logo 1"></img>
          <p className="c_level"> {item?.level}</p>
          <p className="c_name"> {item?.c_name}</p>
          </div>
        ))
      }
    </Slider>
  </div>
  );

};

export default CenterModeSlick;