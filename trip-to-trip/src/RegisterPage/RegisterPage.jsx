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
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!regEmail.username || !regEmail.email || !regEmail.fname || !regEmail.lname || !regEmail.password || !regEmail.conpass || !regEmail.address || !regEmail.city || !regEmail.state) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, regEmail.email, regEmail.password)
            .then(async (res) => {
                setSubmitButtonDisabled(false);
                const user = res.user;
                await updateProfile(user, {
                    displayName: regEmail.username,
                });
                navigate("/");
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });
    }

    return (
        <div id='register_page_body'>
            <div className="Container">
                <div className="reg-title">
                    <h1 className="display-6">Register</h1>
                </div>
                <Form className="Register">
                    <Form.Group className="mb-3">
                        <TextField id="outlined-username" onChange={(event) => setRegEmail((prev) => ({ ...prev, username: event.target.value }))} size="small" label="Username" variant="outlined" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <TextField id="outlined-email" onChange={(event) => setRegEmail((prev) => ({ ...prev, email: event.target.value }))} size="small" label="Email" variant="outlined" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <TextField id="outlined-fname" onChange={(event) => setRegEmail((prev) => ({ ...prev, fname: event.target.value }))} size="small" label="First Name" variant="outlined" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <TextField id="outlined-lname" onChange={(event) => setRegEmail((prev) => ({ ...prev, lname: event.target.value }))} size="small" label="Last Name" variant="outlined" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <TextField id="outlined-password" onChange={(event) => setRegEmail((prev) => ({ ...prev, password: event.target.value }))} size="small" label="Password" variant="outlined" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <TextField id="outlined-conpass" onChange={(event) => setRegEmail((prev) => ({ ...prev, conpass: event.target.value }))} size="small" label="Confirm password" variant="outlined" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <TextField id="outlined-address" onChange={(event) => setRegEmail((prev) => ({ ...prev, address: event.target.value }))} size="small" label="Address" variant="outlined" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <TextField id="outlined-city" onChange={(event) => setRegEmail((prev) => ({ ...prev, city: event.target.value }))} size="small" label="City" variant="outlined" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <TextField id="outlined-state" onChange={(event) => setRegEmail((prev) => ({ ...prev, state: event.target.value }))} size="small" label="State" variant="outlined" />
                        </Form.Group>
                    </Row>

                    {/* <Form.Group className="mb-3">
                        <FormControlLabel control={<Checkbox />} label="Yes, I agree with all terms & conditions" />
                    </Form.Group> */}

                    <Form.Group id="btn">
                        <Button id="btn-submit" onClick={handleSubmission} disabled={submitButtonDisabled} variant="contained">Register</Button>
                    </Form.Group>

                    <p id="sign-link">
                        Already have an account?
                        <Link id="link-sign" to="/SignIn">Login here</Link>
                    </p>
                    <b id="error">{errorMsg}</b>
                </Form >
            </div >
        </div>
    );
};

export default RegisterPage;