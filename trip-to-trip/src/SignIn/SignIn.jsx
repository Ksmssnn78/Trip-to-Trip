import { useState } from 'react';
import './SignIn.css';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Form from "react-bootstrap/Form";
import { auth } from '../Firebase/config';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'lottie-react';
import dashboard from '../resources/login1.json';

const SignIn = () => {

    const navigate = useNavigate();
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );
    const [logEmail, setLogEmail] = useState({
        email: "",
        password: "",
    });

    const handleSubmission = () => {
        if (!logEmail.email || !logEmail.password) {
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
        }else{
            signInWithEmailAndPassword(auth, logEmail.email, logEmail.password)
            .then(async (res) => {
                const user = res.user;
                await updateProfile(user, {
                    displayName: logEmail.email,
                });
                toast.success("Let's go in!", {
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
                navigate("/Home");
            })
            .catch((err) => {
                toast.error('Wrong email or password!', {
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
        }

        
    }



    return (
        <div id='sign_in_body'>
            <div className="Container-signin">
                <div id="sign-title">
                    <h1 className="display-6">Sign In</h1>
                </div>
                <Form id="SignIn">
                    <Form.Group className="mb-3">

                        <TextField id="outlined-logemail" onChange={(event) => setLogEmail((prev) => ({ ...prev, email: event.target.value }))} size="small" label="Email" variant="outlined" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <TextField id="outlined-logpass" type="password" onChange={(event) => setLogEmail((prev) => ({ ...prev, password: event.target.value }))} size="small" label="Password" variant="outlined" />
                    </Form.Group>

                    <Form.Group id="btn">
                        <Button id="btn-signin" onClick={handleSubmission} variant="contained">Sign In</Button>
                    </Form.Group>
                    <p id="reg-link">
                        Don't have an account?
                        <Link id="link-register" to="/Register">Register here</Link>
                    </p>
                </Form >
            </div >

            <div id='animeDash'>
                <Lottie animationData={dashboard} loop={true} />
            </div>

            <ToastContainer />

        </div>
    );
};

export default SignIn;