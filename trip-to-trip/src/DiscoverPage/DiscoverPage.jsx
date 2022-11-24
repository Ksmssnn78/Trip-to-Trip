import React, { useState } from 'react';
import './DiscoverPage.css';
import CenterModeSlick from '../CenterModeSlick/CenterModeSlick';
// import CarouselItem from '../CarouselItem/CarouselItem';
import PauseOnHover from '../PauseOnHoverSlick/PauseOnHover';
const DiscoverPage = (props) => {
    const [active, setActive] = useState()
    const [imgs, setImgs] = useState("")
    const isActive = (value,images) =>{
            setActive(value);
            setImgs(images);
            console.log(imgs);
            console.log(active);
    }
    
    return (
        <div id='discover_main'>
            <CenterModeSlick isActive={isActive}/>
            {/* <CarouselItem/> */}
            <PauseOnHover active={active} select_Data={props.set_B_DfD}/>
        </div>
    );
};

export default DiscoverPage;