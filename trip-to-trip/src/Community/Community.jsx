import React from 'react';
import './Community.css'
import TextField from '@mui/material/TextField';
import VerticalModeSlick from '../VerticalModeSlick/VerticalModeSlick';



const Community = () => {
    return (
        <div id="container">
            <div id="first">
                <div id="profile">
                    <div id="image">
                        <img src="../resources/Home.png" alt=""/>
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
                <div id="create-post">
                     <TextField id="outlined-loguser" size="small" label="What's New?" variant="outlined"/>
                     <button className="button">Post it</button>
                </div>
                <div id="post">
                    <VerticalModeSlick/>
                </div>
            </div>
            <div id="third">
                <div id="new-page">
                   <h1>what to add</h1>
                </div>
            </div>
        </div>
    );
};

export default Community;