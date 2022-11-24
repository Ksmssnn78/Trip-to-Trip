import React from 'react';
// import { useNavigate } from "react-router-dom";
import './SpecialDeal.css'; 
import VerticalModeSlick from '../VerticalModeSlick/VerticalModeSlick';

const SpecialDeal = (props) => {

    return (
        <div>
            <VerticalModeSlick getD= {props.set_B_D}/>
        </div>
    );
};

export default SpecialDeal;