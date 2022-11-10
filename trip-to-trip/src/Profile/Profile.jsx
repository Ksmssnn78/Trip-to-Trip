import React from 'react';
import './Profile.css'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ProfilePic from '../resources/001.jpg';
import { auth } from '../Firebase/config';


const Profile = (props) => {

    return (
        <div id="Profile-Container">
            <div id="Container">
                <div id="prof-title">
                    <h1 className="display-6">Profile</h1>
                </div>
                <Form className="Register">
                    <Row className="mb-1">
                        <Form.Group className="mb-1" as={Col}>
                            <Form.Group className="mb-1">
                                <img id="profile-pic" src={ProfilePic} alt=""></img>
                            </Form.Group>
                            <Form.Group className="mb-1">
                                <label id="username" size="small">{props.name ? `#${props.name}` : "Login please"}</label>
                            </Form.Group>
                        </Form.Group>

                        <Row className="mb-3" as={Col}>
                            <Form.Group className="mb-3">
                                <label id="email" size="small" value="">{auth.currentUser.email}</label>
                                {/* <label id="email" size="small" value="">{props.email ? `${props.email}` : ""}</label> */}
                                {/* <TextField id="email" value={props.email ? `${props.email}` : ""} size="small" label="Email" variant="outlined" /> */}
                            </Form.Group>
                            <Form.Group as={Col}>
                                <TextField id="fname" defaultValue="" size="small" label="First Name" variant="outlined" />
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col}>
                                <TextField id="lname" defaultValue="" size="small" label="Last Name" variant="outlined" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <TextField id="password" defaultValue="" size="small" label="Password" variant="outlined" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <TextField id="address" defaultValue="" size="small" label="Address" variant="outlined" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <TextField id="city" defaultValue="" size="small" label="City" variant="outlined" />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                <TextField id="state" defaultValue="" size="small" label="State" variant="outlined" />
                            </Form.Group>
                            <Form.Group id="btn">
                                <Button id="btn-update" variant="contained">Update</Button>
                                <Button id="btn-logout" onClick="" variant="contained">Log Out</Button>
                            </Form.Group>
                        </Row>
                    </Row>
                </Form >
            </div >
        </div>
    );
};

export default Profile;