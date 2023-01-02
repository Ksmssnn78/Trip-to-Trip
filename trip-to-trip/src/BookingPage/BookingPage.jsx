import React, { useState,useEffect } from 'react';
import './BookingPage.css';
// import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import div from "react-bootstrap/Row";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';

// import { wait } from '@testing-library/user-event/dist/utils';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingPage = (props) => {

    const navigate = useNavigate();

    // const [errMsg, setErrMsg] = useState("");
    const [hoteldata, setHotelData] = useState([]);
    const [book, setBook] = useState({
        username: "",
        email: "",
        fname: "",
        lname: "",
        address: "",
        city: "",
        hotel: "",
        country: "",
        location: "",
        person: "",
        days: "",
        start_loc: "",
        room: "",
        vehicle_type: ""
    });

    const filterHoteldata = async() =>{
        const response = await fetch('http://localhost:5000/hotels_info');
        const data = await response.json();
        console.log(data);
        if(data.length > 0){
            var temp = data.filter((dt)=> dt.location === props.set_loc );
        }
        setHotelData(temp);
        
    }

    useEffect(()=>{
        filterHoteldata();
      },[])

    const submitbooking = (e) =>{
        let flag = false;
        e.preventDefault();
        let check_b = document.getElementById("checkterm");
        if(check_b.checked){
            book.username= props.set_username;
            book.email= props.set_email;
            book.fname= props.set_fname;
            book.lname= props.set_lname;
            book.address= props.set_address;
            book.city= props.set_city;
            book.country= props.set_cntry;
            book.location= props.set_loc;
            console.log(book);
            console.log(props.set_loc);
            try{
                Object.keys(book).map(function(keyName, keyIndex) {
                    // use keyName to get current key's name
                    // and a[keyName] to get its value
                    if(book[keyName] === "")
                    {
                        flag = true;
                    }
                  })
                if (flag) {
                    // setErrMsg("Fill all fields correctly!");
                    toast.error('Fill all fields correctly!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    return;
                }else{
                    props.getBookingInfo(book);
                    navigate('/BookingFinal');
                }
                
            }catch(e){
                console(e)
            }
        }else{
            // setErrMsg("please Check the Box before proceed!")
            toast.error('please Check the Box before proceed!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        
    }   


    return (
        <div className='Booking-page-main'>
            <h1>{props.set_data}</h1>
            <Form className="Booking-page-form" >
                    <div className='user-booking common-div-booking'>
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-username"  defaultValue="" size="small" label={props.set_username} variant="outlined" disabled={true} />
                        </Form.Group>

                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-email"  defaultValue="" size="small" label={props.set_email} variant="outlined" disabled={true}/>
                        </Form.Group>
                    </div>
                    

                    <div className="name-booking common-div-booking">
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-fname"  defaultValue="" size="small" label={props.set_fname} variant="outlined" disabled={true}/>
                            {/* <Form.Control className="fname" placeholder="Enter first name"></Form.Control> */}
                        </Form.Group>

                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-lname"  defaultValue="" size="small" label={props.set_lname} variant="outlined" disabled={true} />
                        </Form.Group>
                    </div>

                    <div className="address-booking common-div-booking">
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-address"  defaultValue="" size="small" label={props.set_address} variant="outlined" disabled={true}/>
                        </Form.Group>
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-city"  defaultValue="" size="small" label={props.set_city} variant="outlined" disabled={true} />
                        </Form.Group>
                    </div>

                    <div className="address-booking common-div-booking">
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-address"  defaultValue="" size="small" label={props.set_loc} variant="outlined" disabled={true}/>
                        </Form.Group>
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-city"  defaultValue="" size="small" label={props.set_cntry} variant="outlined" disabled={true}/>
                        </Form.Group>
                    </div>

                    <div className="address-booking common-div-booking">
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-address" onChange={(event) => setBook((prev) => ({ ...prev, person: event.target.value }))} defaultValue="" size="small" type='number' label="Person?" variant="outlined" />
                        </Form.Group>
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-city" onChange={(event) => setBook((prev) => ({ ...prev, days: event.target.value }))} defaultValue="" size="small" type='number' label="Days?" variant="outlined" />
                        </Form.Group>
                    </div>

                    <div className="address-booking common-div-booking">
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-address" onChange={(event) => setBook((prev) => ({ ...prev, room: event.target.value }))} defaultValue="" size="small" type='number' label="room?" variant="outlined" />
                        </Form.Group>
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-city" onChange={(event) => setBook((prev) => ({ ...prev, start_loc: event.target.value }))} defaultValue="" size="small" label="Start location(city)" variant="outlined" />
                        </Form.Group>
                    </div>


                    <div className="address-booking common-div-booking">
                        <div className="mb-booking">
                            <label className='mb-booking-select'>Choose a Hotel : </label>
                            <select  name="Hotel" onChange={(event) => setBook((prev) => ({ ...prev, hotel: event.target.value }))}>
                                <option className='mb-booking-select-option' value=""></option>
                                {
                                    hoteldata.length > 0 && hoteldata.map((data)=>(
                                        <option className='mb-booking-select-option' value={data?.heading} key={data?._id}>{data.heading}</option>
                                    ))
                                }
                                
                            </select>
                        </div>
                        <div className="mb-booking">
                            <label className='mb-booking-select'>Choose a Vehicle type : </label>
                            <select  name="vehicle_type" onChange={(event) => setBook((prev) => ({ ...prev, vehicle_type: event.target.value }))}>
                                <option value=""></option>
                                <option value="BUS">BUS</option>
                                <option value="Ship">Ship</option>
                                <option value="Plane">plane</option>
                            </select>
                        </div>     
                    </div>

                    <input type="checkbox" className='mb-booking' id='checkterm' name='checkbox' />
                    <label id='checkbox_label' htmlFor="checkbox">Yes, I agree with all terms & conditions</label>

                    <Form.Group id="btn-booking">
                        <Button id="btn-b-submit" onClick={submitbooking} variant="contained">Proceed</Button>
                    </Form.Group>

                    {/* <b id="mb-error">{errMsg}</b> */}
                </Form >
                <ToastContainer />
        </div>
    );
};

export default BookingPage;