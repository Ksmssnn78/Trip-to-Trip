import React from 'react';
import './Profile.css'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ProfilePic from '../resources/adventurer.png';
import { auth } from '../Firebase/config';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


const Profile = (props) => {
    
    
    const navigate = useNavigate();
    const [profilepic, setprofilepic] = useState(null);
    const [updateData, setupdateData] = useState({
        email:"",
        fname: "",
        lname: "",
        password: "",
        username:"",
        address: "",
        city: ""
    });
    const handleprofilepic = (e) =>{
        setprofilepic(e.target.files[0]); 
        console.log((Object.keys(props.image_info).length === 0));

    }

    const updateProfile = () =>{
        console.log(profilepic)
        updateData.email=props.email;
        if(updateData.fname === ""){
            updateData.fname = props.fname;
        }
        if(updateData.lname === ""){
            updateData.lname = props.lname;
        }
        if(updateData.username === ""){
            updateData.username = props.username;
        }
        if(updateData.address === ""){
            updateData.address = props.address;
        }
        if(updateData.city === ""){
            updateData.city = props.city;
        }
        let pro_formData = new FormData();
        pro_formData.append("email",updateData.email);
        pro_formData.append("fname",updateData.fname);
        pro_formData.append("lname",updateData.lname);
        pro_formData.append("password",updateData.password);
        pro_formData.append("username",updateData.username);
        pro_formData.append("address",updateData.address);
        pro_formData.append("city",updateData.city);
        pro_formData.append("file",profilepic);
        console.log(pro_formData);

        if(props.email === "")
        {
            // navigate('/SignIn')
            return;
        }else{
            axios.post('http://localhost:5000/post/DemoData',pro_formData).then(respose => {
            console.log(respose)
            }).catch(error => {
                console.log(error)
            })
            toast.success('updated profile successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            // window.location.reload();
        }
        
        
        
    }

    const logout = async () => {
        await signOut(auth);
        navigate("/");
    }

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
                                {
                                    (Object.keys(props.image_info).length === 0) ?
                                    <img id="profile-pic" src={ProfilePic} alt="profile image"/>
                                    : <img id="profile-pic" src={"data:image/jpeg;base64," + props.image_info.image} alt="profile image"/>
                                }
                                
                            </Form.Group>
                            <Form.Group className="mb-1">
                            <input id="choplc" type="file" onChange={handleprofilepic}  name='file'></input>
                            </Form.Group>
                        </Form.Group>

                        <Row className="mb-3" as={Col}>
                            <Form.Group as={Col}>
                                <TextField id="fname" size="small" onChange={(event) => setupdateData((prev) => ({ ...prev, fname: event.target.value }))} label={props.fname} variant="outlined" />
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col}>
                                <TextField id="lname" size="small" onChange={(event) => setupdateData((prev) => ({ ...prev, lname: event.target.value }))} label={props.lname} variant="outlined" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <TextField id="password" size="small" onChange={(event) => setupdateData((prev) => ({ ...prev, password: event.target.value }))} label="Password" variant="outlined" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <TextField id="address" size="small" onChange={(event) => setupdateData((prev) => ({ ...prev, address: event.target.value }))} label={props.address} variant="outlined" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <TextField id="city" size="small" onChange={(event) => setupdateData((prev) => ({ ...prev, username: event.target.value }))} label={props.username} variant="outlined" />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                <TextField id="state" size="small" onChange={(event) => setupdateData((prev) => ({ ...prev, city: event.target.value }))} label={props.city} variant="outlined" />
                            </Form.Group>
                            <Form.Group id="btn">
                                <Button id="btn-update" onClick={updateProfile} variant="contained">Update</Button>
                                <Button id="btn-logout" onClick={logout} variant="contained">Log Out</Button>
                            </Form.Group>
                        </Row>
                    </Row>
                </Form >
            </div >
            <ToastContainer />
        </div>
    );
};

export default Profile;