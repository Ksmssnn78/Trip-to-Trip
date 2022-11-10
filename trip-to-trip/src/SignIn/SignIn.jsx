import { useState } from 'react';
import './SignIn.css';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Form from "react-bootstrap/Form";
import { auth } from '../Firebase/config';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const navigate = useNavigate();
    const [logEmail, setLogEmail] = useState({
        email: "",
        password: "",
    });

    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmission = () => {
        if (!logEmail.email || !logEmail.password) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        signInWithEmailAndPassword(auth, logEmail.email, logEmail.password)
            .then(async (res) => {
                const user = res.user;
                await updateProfile(user, {
                    displayName: logEmail.email,
                });
                navigate("/Profile");
            })
            .catch((err) => {
                setErrorMsg(err.message);
            });
    }



    return (
        <div id='sign_in_body'>
            <div className="Container-signin">
                <div id="sign-title">
                    <h1 className="display-6">Sign In</h1>
                </div>

                <Form id="SignIn">
                    <Form.Group className="mb-3">

                        <TextField id="outlined-loguser" onChange={(event) => setLogEmail((prev) => ({ ...prev, email: event.target.value }))} size="small" label="Username" variant="outlined" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <TextField id="outlined-logpass" onChange={(event) => setLogEmail((prev) => ({ ...prev, password: event.target.value }))} size="small" label="Password" variant="outlined" />
                    </Form.Group>

                    <Form.Group id="btn">
                        <Button id="btn-signin" onClick={handleSubmission} variant="contained">Sign In</Button>
                    </Form.Group>
                    <p id="reg-link">
                        Don't have an account?
                        <Link id="link-register" to="/Register">Register here</Link>
                    </p>
                    <b id="error">{errorMsg}</b>
                </Form >
            </div >
        </div>
    );
};

export default SignIn;