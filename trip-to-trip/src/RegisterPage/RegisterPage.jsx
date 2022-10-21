import React from 'react';
import './RegisterPage.css';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControlLabel from '@mui/material/FormControlLabel';
import Row from "react-bootstrap/Row";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';


const RegisterPage = () => {
    return (
        <div className="Container">
            <div className="reg-title">
                <h1 className="display-4">Register</h1>
            </div>
            <Form className="Register">
                <Form.Group className="mb-3">
                    {/* <label>
                        <i className="zmdi zmdi-key"></i>
                    </label>
                    <Form.Label>Username</Form.Label> */}
                    <TextField id="outlined-username" defaultValue="" size="small" label="Username" variant="outlined" />
                    {/* <Form.Control className="username" placeholder="Enter your username"></Form.Control> */}
                </Form.Group>

                <Form.Group className="mb-3">
                    {/* <label>
                        <i className="zmdi zmdi-email"></i>
                    </label>
                    <Form.Label>Email</Form.Label> */}
                    <TextField id="outlined-email" defaultValue="" size="small" label="Email" variant="outlined" />
                    {/* <Form.Control className="email" placeholder="Enter your email"></Form.Control> */}
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        {/* <label>
                            <i className="zmdi zmdi-key"></i>
                        </label>
                        <Form.Label>First Name</Form.Label> */}
                        <TextField id="outlined-fname" defaultValue="" size="small" label="First Name" variant="outlined" />
                        {/* <Form.Control className="fname" placeholder="Enter first name"></Form.Control> */}
                    </Form.Group>

                    <Form.Group as={Col}>
                        {/* <label>
                            <i className="zmdi zmdi-key"></i>
                        </label>
                        <Form.Label>Last Name</Form.Label> */}
                        <TextField id="outlined-lname" defaultValue="" size="small" label="Last Name" variant="outlined" />
                        {/* <Form.Control className="lname" placeholder="Enter last name"></Form.Control> */}
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        {/* <label>
                            <i className="zmdi zmdi-key"></i>
                        </label> */}
                        {/* <Form.Label>Password</Form.Label> */}
                        <TextField id="outlined-password" defaultValue="" size="small" label="Password" variant="outlined" />
                        {/* <Form.Control className="password" placeholder="Enter password"></Form.Control> */}
                    </Form.Group>

                    <Form.Group as={Col}>
                        {/* <label>
                            <i className="zmdi zmdi-key"></i>
                        </label> */}
                        {/* <Form.Label>Confirm password</Form.Label> */}
                        <TextField id="outlined-conpass" defaultValue="" size="small" label="Confirm password" variant="outlined" />
                        {/* <Form.Control className="conPassword" placeholder="Enter confirm password"></Form.Control> */}
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    {/* <label>
                        <i className="zmdi zmdi-home"></i>
                    </label>
                    <Form.Label>Address</Form.Label> */}
                    <TextField id="outlined-address" defaultValue="" size="small" label="Address" variant="outlined" />
                    {/* <Form.Control className="address" placeholder="Enter your "></Form.Control> */}
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        {/* <label>
                            <i className="zmdi zmdi-home"></i>
                        </label>
                        <Form.Label>City</Form.Label> */}
                        <TextField id="outlined-city" defaultValue="" size="small" label="City" variant="outlined" />
                        {/* <Form.Control className="city" placeholder="Enter city"></Form.Control> */}
                    </Form.Group>

                    <Form.Group as={Col}>
                        {/* <label>
                            <i className="zmdi zmdi-home"></i>
                        </label>
                        <Form.Label>State</Form.Label>
                        <Form.Control className="State" placeholder="Enter state"></Form.Control> */}
                        <TextField id="outlined-state" defaultValue="" size="small" label="State" variant="outlined" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                <FormControlLabel control={<Checkbox />} label="Yes, I agree with all terms & conditions" />
                </Form.Group>

                <Form.Group id="btn">
                    <Button id="btn-submit" variant="contained">Register</Button>
                </Form.Group>
            </Form >
        </div >
    );
};

export default RegisterPage;