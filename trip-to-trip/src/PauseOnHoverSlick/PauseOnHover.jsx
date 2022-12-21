import React, { useEffect,useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './PauseOnHover.css';
import { useNavigate } from "react-router-dom";


const PauseOnHover = (props) => {

  const navigate = useNavigate();

  const [sdata, setsdata] = useState([]);
  const [filtered_Data,setFilteredData] = useState([]);

  const filter = (co_name) =>{
      console.log(co_name);
      console.log(sdata);
      let datafilter = sdata.filter(data => data.country == co_name);
      console.log(datafilter);
      setFilteredData(datafilter);
    }

  const getDetails = async()=>{
    const response = await fetch('http://localhost:5000/locations');
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
              filter(props.country_name);
    }, [props.active,props.country_name])
    
    
  //   if(datafilter.length === 0){
  //     datafilter = sdata;
  //     console.log("no data!")
  // }

    const mouseDown_Coords = e => {
      window.checkForDrag = e.clientX;
    };

    const clickOr_Drag = (e,selected_loc) => {
      const mouseUp = e.clientX;
      if (
        mouseUp < window.checkForDrag + 6 &&
        mouseUp > window.checkForDrag - 6
      ) {
        props.select_Data(selected_loc);
        navigate('/DetailedLocation');

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
    <h3 id="POH-title">Select A Location : </h3>
    <Slider {...settings} arrows={false}>
      {/* {
        props.timages.length > 0 && props.timages.map((x) => (
          <div key={x?.id} onClick={handleClick} >
            <img className='c_img' src={x?.url} alt="logo 1"></img>
          </div>
        ))
      } */}
      {
        filtered_Data.length > 0 && filtered_Data.map( (data) =>(
          <div onMouseDown={e => mouseDown_Coords(e)} onMouseUp={e => clickOr_Drag(e,data?.location)} key={data?._id}>
            <img className='P_img' src={"data:image/jpeg;base64," + data?.imageinfo.image} alt="logo"/>
            <p>{data?.location}</p>
          </div>
        ) )
      }
     
    </Slider>
  </div>
  );
};

export default PauseOnHover;

