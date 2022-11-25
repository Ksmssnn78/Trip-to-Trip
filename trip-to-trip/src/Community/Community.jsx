import React from 'react';
import './Community.css'
import TextField from '@mui/material/TextField';
import CommunitySlick from '../CommunitySlick/CommunitySlick';
import Form from "react-bootstrap/Form";


const Community = () => {
    return (
        <div id="container">
            <div id="first">
                <div id="profile">
                    <div id="image">
                        <img src="../resources/Home.png" alt="" />
                    </div>
                    <div id="profile-name">
                        <p>
                            <b>Tonmoy Roy</b>
                        </p>
                        <p>
                            #tonmoyroy111
                        </p>
                    </div>

                </div>
                <div id="menu">
                    <button id="btn-profile">Profile</button>
                    <button id="btn-photos">Photos</button>
                </div>
            </div>
            <div id="second">
                <Form id="create-post">
                    <TextField id="outlined-loguser" size="small" label="What's New?" variant="outlined" />
                    <button id="btn-post">Post it</button>
                </Form>
                <div id="post">
                    <CommunitySlick />
                </div>
            </div>
            <div id="third">
                <div id="new-page">
                    <h1>something new is coming</h1>
                </div>
            </div>
        </div>
    );
};

export default Community;