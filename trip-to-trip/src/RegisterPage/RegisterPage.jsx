import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './RegisterPage.css';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'lottie-react';
import RegAnime from '../resources/reg.json';


const RegisterPage = () => {

    const navigate = useNavigate();
    const [regEmail, setRegEmail] = useState({
        username: "",
        email: "",
        fname: "",
        lname: "",
        password: "",
        conpass: "",
        address: "",
        city: "",
        state: "",
        status: "user"
    });

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        var authErr = "";
        if (!regEmail.username || !regEmail.email || !regEmail.fname || !regEmail.lname || !regEmail.password || !regEmail.conpass || !regEmail.address || !regEmail.city || !regEmail.state) {

            toast.error('Fill all fields!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        if(regEmail.password === regEmail.conpass)
        {
            setSubmitButtonDisabled(true);
            createUserWithEmailAndPassword(auth, regEmail.email, regEmail.password)
            .then(async (res) => {
                setSubmitButtonDisabled(false);
                const user = res.user;
                await updateProfile(user, {
                    displayName: regEmail.username,
                });
                toast.success('Registration done!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                await delay(3000);
                navigate("/SignIn");
            })
            .catch((err) => {
                authErr = err.message;
                console.log(authErr);
                setSubmitButtonDisabled(false);
                toast.error(authErr, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
            if (authErr === "") {
                axios.post('http://localhost:5000/adduser', regEmail).then(respose => {
                    console.log(respose)
                }).catch(error => {
                    console.log(error)
                })
            }

        }else{
            toast.error('password not match!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        


    }

    return (
        <div id='register_page_body'>
            <div className="Container">
                <div className="reg-title">
                    <h1 className="display-6">Register</h1>
                </div>
                <Form className="Register" action="/registeruser" method="post">
                    <Form.Group className="mb-3">
                        <TextField id="outlined-username" onChange={(event) => setRegEmail((prev) => ({ ...prev, username: event.target.value }))} value={regEmail.username} size="small" label="Username" variant="outlined" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <TextField id="outlined-email" onChange={(event) => setRegEmail((prev) => ({ ...prev, email: event.target.value }))} value={regEmail.email} size="small" label="Email" variant="outlined" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <TextField id="outlined-fname" onChange={(event) => setRegEmail((prev) => ({ ...prev, fname: event.target.value }))} value={regEmail.fname} size="small" label="First Name" variant="outlined" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <TextField id="outlined-lname" onChange={(event) => setRegEmail((prev) => ({ ...prev, lname: event.target.value }))} value={regEmail.lname} size="small" label="Last Name" variant="outlined" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <TextField id="outlined-password" type='password' onChange={(event) => setRegEmail((prev) => ({ ...prev, password: event.target.value }))} value={regEmail.password} size="small" label="Password" variant="outlined" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <TextField id="outlined-conpass" type='password' onChange={(event) => setRegEmail((prev) => ({ ...prev, conpass: event.target.value }))} value={regEmail.conpass} size="small" label="Confirm password" variant="outlined" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <TextField id="outlined-address" onChange={(event) => setRegEmail((prev) => ({ ...prev, address: event.target.value }))} value={regEmail.address} size="small" label="Address" variant="outlined" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <TextField id="outlined-city" onChange={(event) => setRegEmail((prev) => ({ ...prev, city: event.target.value }))} value={regEmail.city} size="small" label="City" variant="outlined" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <TextField id="outlined-state" onChange={(event) => setRegEmail((prev) => ({ ...prev, state: event.target.value }))} value={regEmail.state} size="small" label="State" variant="outlined" />
                        </Form.Group>
                    </Row>

                    <Form.Group id="btn">
                        <Button id="btn-submit" onClick={handleSubmission} disabled={submitButtonDisabled} variant="contained">Register</Button>
                    </Form.Group>

                    <p id="sign-link">
                        Already have an account?
                        <Link id="link-sign" to="/SignIn">Login here</Link>
                    </p>
                </Form >
            </div >

            <div id='animeDash'>
                <Lottie animationData={RegAnime} loop={true} />
            </div>

            <ToastContainer />
        </div>
    );
};

export default RegisterPage;