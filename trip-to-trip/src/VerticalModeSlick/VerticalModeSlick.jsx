import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './VerticalModeSlick.css';



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

    mouse_Down_Coords = (e,item) => {
      window.checkForDrag = e.clientX;
      // this.props.getD(item)
    };

    click_Or_Drag = (e,item) => {
      const mouseUp = e.clientX;
      if (
        mouseUp < window.checkForDrag + 6 &&
        mouseUp > window.checkForDrag - 6
      ) {
        this.props.getD(item)
        console.log(item)
      }
    };
    
    

    render() {
      const settings = {
        dots: true,
        infinite: false,
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
          <h2 id="VM_heading">Special Deal for our lovely costomers:</h2>
          <Slider {...settings} ref={slider => this.slider = slider }>
          { this.state.posts.map((post) => (
                  <div className="VM_slick_div" onMouseDown={e => this.mouse_Down_Coords(e,post.email)} onMouseUp={e => this.click_Or_Drag(e,post?.location)}  key={post?._id}>
                    <div className="vm-slick-inner-div">
                      <h1> {post?.offer}%</h1>
                      <h3>{post?.location}</h3>
                      <p className="vm-slick-inner-text">{post?.details}</p>
                    </div>
                    <div>
                      <img className="v_img" src={"data:image/jpeg;base64," + post?.imageinfo.image} alt="logo 1" onClick = {this.props.email !== ""?()=>this.props.navigation('/Booking') :()=>this.props.navigation('/SignIn') } ></img>
                    </div>
                    
                  </div>
             )) }
          </Slider>
        </div>
      </div>
    );
  }
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/specialdeal_info");
  const posts = await res.json();
  // console.log(posts);
  return {
    props: { posts }
  };
}
