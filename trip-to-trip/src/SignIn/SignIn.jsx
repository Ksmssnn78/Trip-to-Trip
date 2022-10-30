import React from 'react';
import './SignIn.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Form from "react-bootstrap/Form";

const SignIn = () => {
    return (
        <div id='sign_in_body'>
            <div className="Container-signin">
                <div id="sign-title">
                    <h1 className="display-6">Sign In</h1>
                </div>

            <Form id="SignIn">
                <Form.Group className="mb-3">
                    {/* <label>
                        <i className="zmdi zmdi-key"></i>
                    </label>
                    <Form.Label>Username</Form.Label>
                    <Form.Control className="username" id="username" placeholder="Enter your username"></Form.Control> */}
                    <TextField id="outlined-loguser" defaultValue="" size="small" label="Username" variant="outlined" />
                </Form.Group>

                    <Form.Group className="mb-3">
                        {/* <label>
                            <i className="zmdi zmdi-email"></i>
                        </label>
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="email" id="email" placeholder="Enter your email"></Form.Control> */}
                        <TextField id="outlined-logpass" defaultValue="" size="small" label="Password" variant="outlined" />
                    </Form.Group>

                <Form.Group id="btn">
                    <Button id="btn-signin" variant="contained">Sign In</Button>
                </Form.Group>
                <p id="reg-link">
                    Don't have an account?
                    <a href='#Register'>Register here</a>
                </p>
            </Form >
        </div >
        </div>
    );
};

export default SignIn;