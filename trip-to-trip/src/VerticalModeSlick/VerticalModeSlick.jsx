import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './VerticalModeSlick.css';
import logo from '../resources/sun.jpg';

export default class VerticalMode extends Component {
    
  constructor(props) {
    super(props);
    this.state = {posts: []};
    }
    
    
    slide(y){
        y > 0 ? (
           this.slider.slickPrev()
        ) : (
           this.slider.slickNext()
        )
    }
    componentDidMount(){
        window.addEventListener('wheel', (e) => {
            this.slide(e.wheelDelta);
        })
        getStaticProps().then(data => {
          this.setState({
            posts: data.props.posts
          });
          // console.log("data fetching done!");
          // console.log(this.state.posts);
        });
        
    }
    handleClickSlide = (post) => {
              console.log(post); // getting "img3" only on every slide click
          
    };
    

    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
      return (
        <div id="vertical_main">
        <div id="vertical-slick">
          <h2>Vertical Mode</h2>
          <Slider {...settings} ref={slider => this.slider = slider }>
          { this.state.posts.map((post) => (
                  <div className="VM_slick_div" onClick={() => {this.handleClickSlide(post) }} key={post.id}>
                    <div className="vm-slick-inner-div">
                      <h1> offer offer offer</h1>
                      <h3>Qatar</h3>
                      <p>some thing will write later here!</p>
                    </div>
                    <div>
                      <img className="v_img" src={logo} alt="logo 1"></img>
                    </div>
                    
                  </div>
             )) }
            {/* <div onClick={() => {this.handleClickSlide() }}>
            <img className="v_img" src={logo} alt="logo 1"></img>
            </div>
          */}
          </Slider>
        </div>
        </div>
      );
    }
  }

  export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await res.json();
    // console.log(posts);
    return {
      props: { posts }
    };
  }