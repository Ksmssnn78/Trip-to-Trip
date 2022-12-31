import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div id='about'>
            <div className='about-container'>
                <h1 className='about-head'>ABOUT US</h1>
                <h5 className='about-para'><p>The main purpose of this project is to explore beautiful places on earth, make a tour around the world and learn new culture.The Website will be used to find different beautiful places all over the world, tour with us
                    and sharing beautiful views of the world along with experiences.This platform allows users to create profiles and connect with people of their interests and thoughts to find beautiful place to make a tour.Users can also
                    react and comment on others' posts.</p>
                    <p>Anyone can get a review on a specific Place without and difficulties.Here anyone can share their thoughts without any restrictions
                        on Specific categories.User can Search different places around the world and also take our service for tour
                        arrangements.</p></h5>

            </div>
            <footer className='footer'>
                <small className='' > Copyright @ 2022 All right reserved by team Geekbytes</small>
            </footer>
        </div>
    );
};

export default AboutUs;