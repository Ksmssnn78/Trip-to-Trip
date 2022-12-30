import React from 'react';
// import { useNavigate } from "react-router-dom";
import './SpecialDeal.css'; 
import VerticalModeSlick from '../VerticalModeSlick/VerticalModeSlick';
import { useNavigate } from 'react-router-dom';

const SpecialDeal = (props) => {
    const navigate = useNavigate()

    return (
        <div>
            <VerticalModeSlick navigation={navigate} email={props.email} getD= {props.set_B_D}/>
        </div>
    );
};

export default SpecialDeal;