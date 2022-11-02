import React from 'react';
import './SignIn.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div id='sign_in_body'>
            <div className="Container-signin">
                <div id="sign-title">
                    <h1 className="display-6">Sign In</h1>
                </div>

                <Form id="SignIn">
                    <Form.Group className="mb-3">
                        
                        <TextField id="outlined-loguser" defaultValue="" size="small" label="Username" variant="outlined" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <TextField id="outlined-logpass" defaultValue="" size="small" label="Password" variant="outlined" />
                    </Form.Group>

                    <Form.Group id="btn">
                        <Button id="btn-signin" variant="contained">Sign In</Button>
                    </Form.Group>
                    <p id="reg-link">
                        Don't have an account?
                        <Link id="link-reg" to="/Register">Register here</Link>
                    </p>
                </Form >
            </div >
        </div>
    );
};

export default SignIn;