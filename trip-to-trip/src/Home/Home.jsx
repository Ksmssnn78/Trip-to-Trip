import React, { useState } from 'react';
import "./Home.css";
import worldimg from "../resources/location.png";
import airplaneimg from "../resources/biplane.png";
import kayakimg from "../resources/cruise_ship.png";
import campervanimg from "../resources/bus.png";
import adventurerimg from "../resources/adventurer.png";
import hot_air_balloonimg from "../resources/hot_air_balloon.png";
import hot_air_balloonimg2 from "../resources/hot_air_balloon2.png";
import hot_air_balloonimg3 from "../resources/hot_air_balloon3.png";
import hot_air_balloonimg4 from "../resources/hot_air_balloon4.png";
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
            {/* <motion.div id='animation_center' whileHover={{scale:1.2}} >
                <img id='world_center' src={worldimg} alt="world image" />
            </motion.div> */}
            {/* <motion.div id='animation_circle' animate={{rotate:[360,0]}} transition={{type:"tween",duration:5,repeat:5}}>
                <img id='airoplane_rotate' className='common_circle' src={airplaneimg} alt="airoplane" />
                <img id='kayak_rotate' className='common_circle' src={kayakimg} alt="airoplane" />
                <img id='camp_rotate' className='common_circle' src={campervanimg} alt="airoplane" />
                <img id='advanture_rotate' className='common_circle' src={adventurerimg} alt="airoplane" />
            </motion.div> */}
            <div id='animation_cloud'>
                <motion.img id='cloud1_img' className='cloud_img_class' animate={{ x: [0, 200, 200, 0] }} transition={{ type: "tween", duration: 6, repeat: Infinity }} src={cloud1} alt="cloud1" />
                <motion.img id='cloud2_img' className='cloud_img_class' animate={{ x: [0, -400, -400, 0] }} transition={{ type: "tween", duration: 6, repeat: Infinity }} src={cloud2} alt="cloud2" />
                <motion.img id='cloud3_img' className='cloud_img_class' animate={{ x: [0, 150, 150, 0] }} transition={{ type: "tween", duration: 4, repeat: Infinity }} src={cloud3} alt="cloud3" />
            </div>
            {/* <div id='hot_air_ballon'>
                <motion.img id='hot_air_up' className='hot_air_up_class' animate={{y:[0,-650]}} transition={{type:"tween",duration:5,repeat:5}} src={hot_air_balloonimg} alt="hot_air_ballon" />
                <motion.img id='hot_air_up2' className='hot_air_up_class' animate={{y:[0,-650]}} transition={{type:"tween",duration:8,repeat:5}} src={hot_air_balloonimg2} alt="hot_air_ballon" />
                <motion.img id='hot_air_up3' className='hot_air_up_class' animate={{y:[0,-650]}} transition={{type:"tween",duration:6,repeat:5}} src={hot_air_balloonimg3} alt="hot_air_ballon" />
                <motion.img id='hot_air_up4' className='hot_air_up_class' animate={{y:[0,-650]}} transition={{type:"tween",duration:4,repeat:5}}src={hot_air_balloonimg4} alt="hot_air_ballon" />
            </div> */}

            <div id='animeHome'>
                <Lottie animationData={HomeAnime} loop={true} />
            </div>
        </div>
    );
};

export default Home;