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
                <h1 className="display-6">Register</h1>
            </div>
            <Form className="Register">
                <Form.Group className="mb-3">
                    <TextField id="outlined-username" defaultValue="" size="small" label="Username" variant="outlined" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <TextField id="outlined-email" defaultValue="" size="small" label="Email" variant="outlined" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <TextField id="outlined-fname" defaultValue="" size="small" label="First Name" variant="outlined" />
                        {/* <Form.Control className="fname" placeholder="Enter first name"></Form.Control> */}
                    </Form.Group>

                    <Form.Group as={Col}>
                        <TextField id="outlined-lname" defaultValue="" size="small" label="Last Name" variant="outlined" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <TextField id="outlined-password" defaultValue="" size="small" label="Password" variant="outlined" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <TextField id="outlined-conpass" defaultValue="" size="small" label="Confirm password" variant="outlined" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <TextField id="outlined-address" defaultValue="" size="small" label="Address" variant="outlined" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <TextField id="outlined-city" defaultValue="" size="small" label="City" variant="outlined" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <TextField id="outlined-state" defaultValue="" size="small" label="State" variant="outlined" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <FormControlLabel control={<Checkbox />} label="Yes, I agree with all terms & conditions" />
                </Form.Group>

                <Form.Group id="btn">
                    <Button id="btn-submit" variant="contained">Register</Button>
                </Form.Group>

                <p id="sign-link">
                    Already have an account?
                    <a href='#SignIn'>SignIn here</a>
                </p>
            </Form >
        </div >
    );
};

export default RegisterPage;