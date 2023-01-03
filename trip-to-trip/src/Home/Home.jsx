import React from 'react';
import "./Home.css";
import cloud1 from "../resources/c1.png";
import cloud2 from "../resources/c2.png";
import cloud3 from "../resources/c3.png";
import Lottie from 'lottie-react';
import HomeAnime from '../resources/homelib.json';


import { motion } from 'framer-motion';


const Home = () => {


    return (
        <div id='home-body'>
            <div id='slogun' >
                <motion.h1 animate={{ y: [0, -50, -50, 0] }} transition={{ type: "tween", duration: 5, repeat: 5 }}>GO</motion.h1>
                <em><h1>Explore,</h1>
                    <motion.h1 animate={{ x: [0, 100, 100, 0] }} transition={{ type: "tween", duration: 5, repeat: 5 }} >Its a <b>Big world</b> </motion.h1>
                    <motion.h1 animate={{ y: [0, 50, 50, 0] }} transition={{ type: "tween", duration: 5, repeat: 5 }}>Out there!</motion.h1></em>
            </div>
            <div id='animation_cloud'>
                <motion.img id='cloud1_img' className='cloud_img_class' animate={{ x: [0, 200, 200, 0] }} transition={{ type: "tween", duration: 6, repeat: Infinity }} src={cloud1} alt="cloud1" />
                <motion.img id='cloud2_img' className='cloud_img_class' animate={{ x: [0, -400, -400, 0] }} transition={{ type: "tween", duration: 6, repeat: Infinity }} src={cloud2} alt="cloud2" />
                <motion.img id='cloud3_img' className='cloud_img_class' animate={{ x: [0, 150, 150, 0] }} transition={{ type: "tween", duration: 4, repeat: Infinity }} src={cloud3} alt="cloud3" />
            </div>

            <div id='animeHome'>
                <Lottie animationData={HomeAnime} loop={true} />
            </div>
        </div>
    );
};

export default Home;