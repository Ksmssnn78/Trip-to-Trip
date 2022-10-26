import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Test.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Form from "react-bootstrap/Form";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Test = () => {
    return (
        <Grid container spacing={0.5}>
            <Grid item xs={6}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
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
                            <a href='#Register'>Register here</a>
                        </p>
                    </Form >
                </Item>
            </Grid>
        </Grid>
    );
};

export default Test;