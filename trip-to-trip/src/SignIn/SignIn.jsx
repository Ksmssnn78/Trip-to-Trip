import React from 'react';
import './SignIn.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignIn = () => {
    return (
        <div className="Container-signin">
            <div id="sign-title">
                <h1 className="display-4">Sign In</h1>
            </div>

            <Form id="SignIn">
                <Form.Group className="mb-3">
                    <label>
                        <i className="zmdi zmdi-key"></i>
                    </label>
                    <Form.Label>Username</Form.Label>
                    <Form.Control className="username" id="username" placeholder="Enter your username"></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <label>
                        <i className="zmdi zmdi-email"></i>
                    </label>
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="email" id="email" placeholder="Enter your email"></Form.Control>
                </Form.Group>

                <Form.Group id="btn-submit">
                    <Button id="signin" className="btn btn-sm blue">Sign In</Button>
                </Form.Group>
            </Form >
        </div >
    );
};

export default SignIn;