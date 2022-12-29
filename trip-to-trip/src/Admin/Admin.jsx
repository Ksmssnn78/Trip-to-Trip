import React from 'react';
import "./Admin.css";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Admin = () => {
    return (
        <Container id="admin-bg" maxWidth="false">
            <Grid container spacing={1}>
                <Grid item xs={1.5}>
                    <Item id="sidebar">
                        <Link id="link-dash" to="/Register">Dashboard</Link>
                        <Link id="link-book" to="/Booking">Booking</Link>
                        <Link id="link-cust" to="/Customer">Customer</Link>
                        <Link id="link-deal" to="/Deals">Deals here</Link>
                        <Link id="link-review" to="/Review">Review</Link>
                        <hr></hr>
                        <Link id="link-reg" to="/Register">Register here</Link>
                        <Link id="link-reg" to="/Register">Register here</Link>
                    </Item>
                </Grid>
                <Grid item xs={10.5}>
                    <Item id="content">Content</Item>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Admin;