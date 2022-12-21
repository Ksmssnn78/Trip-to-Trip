import React, { useState } from 'react';
import './BookingPage.css';
// import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControlLabel from '@mui/material/FormControlLabel';
// import div from "react-bootstrap/Row";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';

const BookingPage = (props) => {

    const [book, setBook] = useState({
        username: "",
        email: "",
        fname: "",
        lname: "",
        address: "",
        city: ""
    });
    
    const submitbooking = (e) =>{
        e.preventDefault();
        console.log(book)
        try{
            axios.post('http://localhost:5000/Booking/postData',book).then(respose => {
                console.log(respose)
            }).catch(error => {
                console.log(error)
            })
            // fetch('http://localhost:5000/Booking/Data', {
            // method: 'POST',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json',
            //     'Access-Control-Allow-Methods': '*'
            // },
            // body: JSON.stringify(book),
            // })
            // .then((response) => {
            //     console.log("response",response)
            // })
            // .catch((error) => {
            //     console.error('Error:', error);
            // });

        } catch(e){
            console(e)
        }
        
    }   


    return (
        <div className='Booking-page-main'>
            <h1>{props.set_data}</h1>
            <Form className="Booking-page-form" >
                    <div className='user-booking common-div-booking'>
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-username" onChange={(event) => setBook((prev) => ({ ...prev, username: event.target.value }))} defaultValue="" size="small" label="Username" variant="outlined" />
                        </Form.Group>

                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-email" onChange={(event) => setBook((prev) => ({ ...prev, email: event.target.value }))} defaultValue="" size="small" label="Email" variant="outlined" />
                        </Form.Group>
                    </div>
                    

                    <div className="name-booking common-div-booking">
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-fname" onChange={(event) => setBook((prev) => ({ ...prev, fname: event.target.value }))} defaultValue="" size="small" label="First Name" variant="outlined" />
                            {/* <Form.Control className="fname" placeholder="Enter first name"></Form.Control> */}
                        </Form.Group>

                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-lname" onChange={(event) => setBook((prev) => ({ ...prev, lname: event.target.value }))} defaultValue="" size="small" label="Last Name" variant="outlined" />
                        </Form.Group>
                    </div>

                    <div className="address-booking common-div-booking">
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-address" onChange={(event) => setBook((prev) => ({ ...prev, address: event.target.value }))} defaultValue="" size="small" label="Address" variant="outlined" />
                        </Form.Group>
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-city" onChange={(event) => setBook((prev) => ({ ...prev, city: event.target.value }))} defaultValue="" size="small" label="City" variant="outlined" />
                        </Form.Group>
                    </div>

                    <div className="address-booking common-div-booking">
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-address" onChange={(event) => setBook((prev) => ({ ...prev, address: event.target.value }))} defaultValue="" size="small" label="Country" variant="outlined" />
                        </Form.Group>
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-city" onChange={(event) => setBook((prev) => ({ ...prev, city: event.target.value }))} defaultValue="" size="small" label="Location" variant="outlined" />
                        </Form.Group>
                    </div>

                    <div className="address-booking common-div-booking">
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-address" onChange={(event) => setBook((prev) => ({ ...prev, address: event.target.value }))} defaultValue="" size="small" type='number' label="Person?" variant="outlined" />
                        </Form.Group>
                        <Form.Group className="mb-booking">
                            <TextField id="outlined-b-city" onChange={(event) => setBook((prev) => ({ ...prev, city: event.target.value }))} defaultValue="" size="small" type='number' label="Days?" variant="outlined" />
                        </Form.Group>
                    </div>

                    <div className="address-booking common-div-booking">
                        <div className="mb-booking">
                            <label>Choose a Hotel: </label>
                            <select  name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className="mb-booking">
                            <label>Choose a Flight: </label>
                            <select  name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>     
                    </div>

                    <Form.Group className="mb-booking">
                        <FormControlLabel control={<Checkbox />} label="Yes, I agree with all terms & conditions" />
                    </Form.Group>

                    <Form.Group id="btn-booking">
                        <Button id="btn-b-submit" onClick={submitbooking} variant="contained">Submit</Button>
                    </Form.Group>

                    
                </Form >
        </div>
    );
};

export default BookingPage;