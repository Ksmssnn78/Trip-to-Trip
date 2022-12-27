import React from 'react';
import './BookingFinalSummary.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { wait } from '@testing-library/user-event/dist/utils';
import Form from "react-bootstrap/Form";
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingFinalSummary = (props) => {
    const navigate = useNavigate();
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
    const final_booking = async() =>{
        axios.post('http://localhost:5000/Booking/postData',props.final_info).then(respose => {
            console.log(respose)
            }).catch(error => {
                console.log(error)
            })
            //alert("your request is processed correctly! please wait for confirmation email.");
            toast.success('Wow so easy!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            await delay(3000);
            navigate("/home");
    }
    return (
        <div id='parent-BFS'>
            <div id='main-BFS'>
                <div id="welcome-BFS">
                    <h3>Hello</h3>
                    <h3>{props.final_info.fname +" "+ props.final_info.lname +","} </h3>
                    <p>Thank you for choosing us. We will try to make it the best tour for you.</p>
                </div>
                <div id='reviewed-BFS'>
                    <h4>Here is your information to recheck: </h4>
                    <p>You want to visit a wonderfull place called <b>{props.final_info.location}</b> in <b>{props.final_info.country}.</b></p>
                    <p>You want to stay there for <b>{props.final_info.days}</b> day/s.</p>
                    <p>You need <b>{props.final_info.room}</b> room/s for <b>{props.final_info.person}</b> person/s in hotel: <b>{props.final_info.hotel}.</b></p>
                    <p>You start your jouney form <b>{props.final_info.start_loc}</b> and want a <b>{props.final_info.vehicle_type}</b> service for you wonderful advanture.</p>
                    <p>We will calculate the total ammount of Cost in your <b>{props.final_info.email}.</b> </p>
                </div>
                <Form.Group id="submit-BFS">
                        <Button id="final-submit-BFS" onClick={final_booking} variant="contained">Submit</Button>
                </Form.Group>
                <ToastContainer />
            </div>
        </div>
    );
};

export default BookingFinalSummary;