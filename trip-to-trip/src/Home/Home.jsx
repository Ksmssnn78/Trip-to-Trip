import React from 'react';
import "./Home.css";
// import searchLogo from "../resources/loupe.png"; 


const Home = () => {
    return (
        <div id='home-body'>
            <form action="" method="" id='search-text'>
                <input id='search-input' type="text" placeholder='Search...'/>
                <button id='search-btn'></button>
            </form>
            <div id='slogun'>
                <h1>GO</h1>
                <h1>Explore,</h1> 
                <h1>Its a <em>Big world</em> </h1>
                <h1>Out there!</h1>
            </div>
        </div>
    );
};

export default Home;