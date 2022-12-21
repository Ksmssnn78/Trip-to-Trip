import React, { useState } from 'react';
import './DiscoverPage.css';
import CenterModeSlick from '../CenterModeSlick/CenterModeSlick';
// import CarouselItem from '../CarouselItem/CarouselItem';
import PauseOnHover from '../PauseOnHoverSlick/PauseOnHover';
const DiscoverPage = (props) => {
    const [active, setActive] = useState()
    const [country, setCountry] = useState("")
    // active = "People's Republic of Bangladesh";
    const isActive = (value,cntry) =>{
            setActive(value);
            setCountry(cntry);
            // console.log(country);
            //console.log(active);
    }
    
    return (
        <div id='discover_main'>
            <CenterModeSlick isActive={isActive}/>
            {/* <CarouselItem/> */}
            <PauseOnHover active={active} country_name={country} select_Data={props.set_B_DfD}/>
        </div>
    );
};

export default DiscoverPage;