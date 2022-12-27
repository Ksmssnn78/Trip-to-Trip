import React,{ useEffect, useState } from 'react';
import './DetailedLocation.css';
// import logo from '../resources/sun.jpg';
import { useNavigate } from "react-router-dom";
// import { wait } from '@testing-library/user-event/dist/utils';

const DetailedLocation = (props) => {

    const [DLdata, setDLdata] = useState([]);
    const [DLFilter, setDLFilter] = useState([]);

    const navigate = useNavigate();
    
    const getDLDetails = async()=>{
      const response = await fetch('http://localhost:5000/spot_info');
      const data = await response.json();
      setDLdata(data);
      filtered_spot();
    }

    const filtered_spot= ()=>{
            let filteredspot = DLdata.filter(data => data.location === props.location)
            setDLFilter(filteredspot);
        }
    useEffect(() => {
        getDLDetails();
     }, [])

     useEffect(()=>{
        filtered_spot();
     },[DLdata])

    const DL_Submit = () =>{

        if(props.userEmail === "")
        {
            navigate('/SignIn');
        }else{
            navigate('/Booking');
        }
        
    }

    return (
        <div id='DetailedLoc_parents'>
            <div id='DetailedLoc_main_div'>
                <h3>{props.location}</h3>
                <div id='all_location_display'>
                    {
                        DLFilter.length > 0 && DLFilter.map( (data) =>(
                            <div className='DL_single_loc_display' key={data?._id}>
                                <img className="DL_Location_imgs" src={"data:image/jpeg;base64," + data?.imageinfo.image} alt="this is img" ></img>
                                <p className='DL_Location_name'>{data?.spot}</p>
                            </div>
                            
                        ) )
                    } 
                </div>
            </div>
            <div id='DL_book_btn'>
                    <button id='DL_submit_btn' onClick={DL_Submit}>Book this tour!</button>
                </div>
        </div>
        
    );
};

export default DetailedLocation;