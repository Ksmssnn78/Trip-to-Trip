import React from 'react';
import './CarouselItem.css';
// import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from "../resources/Mount-Rushmore-National-Memorial-in-USA-HD-1920x1280.jpg"

const CarouselItem = () => {
    // const [index, setIndex] = useState(0);
    
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    //     console.log(index);
    // };
    return (
        <div>
            {/* activeIndex={index} onSelect={handleSelect} */}
            <Carousel id='slide-country'  >
            <Carousel.Item>
                <img className="img-block" src={logo} alt="First slide"/>
                <Carousel.Caption>
                <h3>United States of America</h3>
                <p>Nation of Freedom and opportunities.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="img-block"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="img-block"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default CarouselItem;