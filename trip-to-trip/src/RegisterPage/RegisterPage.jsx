import React from 'react';
import './RegisterPage.css';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const RegisterPage = () => {
    return (
        <div className="Container">
            <div className="reg-title">
                <h1 className="display-4">Register</h1>
            </div>
            <Form className="Register">
                <Form.Group className="mb-3">
                    <label>
                        <i className="zmdi zmdi-key"></i>
                    </label>
                    <Form.Label>Username</Form.Label>
                    <TextField id="outlined-basic" label="Username" variant="outlined" />
                    {/* <Form.Control className="username" placeholder="Enter your username"></Form.Control> */}
                </Form.Group>

                <Form.Group className="mb-3">
                    <label>
                        <i className="zmdi zmdi-email"></i>
                    </label>
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="email" placeholder="Enter your email"></Form.Control>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <label>
                            <i className="zmdi zmdi-key"></i>
                        </label>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control className="fname" placeholder="Enter first name"></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <label>
                            <i className="zmdi zmdi-key"></i>
                        </label>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control className="lname" placeholder="Enter last name"></Form.Control>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <label>
                            <i className="zmdi zmdi-key"></i>
                        </label>
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="password" placeholder="Enter password"></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <label>
                            <i className="zmdi zmdi-key"></i>
                        </label>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control className="conPassword" placeholder="Enter confirm password"></Form.Control>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <label>
                        <i className="zmdi zmdi-home"></i>
                    </label>
                    <Form.Label>Address</Form.Label>
                    <Form.Control className="address" placeholder="Enter your "></Form.Control>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <label>
                            <i className="zmdi zmdi-home"></i>
                        </label>
                        <Form.Label>City</Form.Label>
                        <Form.Control className="city" placeholder="Enter city"></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <label>
                            <i className="zmdi zmdi-home"></i>
                        </label>
                        <Form.Label>State</Form.Label>
                        <Form.Control className="State" placeholder="Enter state"></Form.Control>
                    </Form.Group>
                </Row>
                <Form.Group id="btn">
                    {/* <Button className="btn btn-sm blue">Register</Button> */}
                    <Button id="btn-submit" variant="contained">Register</Button>
                </Form.Group>
            </Form >
        </div >
    );
};

export default RegisterPage;