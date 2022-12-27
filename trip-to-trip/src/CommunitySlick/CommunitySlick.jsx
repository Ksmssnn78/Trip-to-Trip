import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CommunitySlick.css';
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import logo from '../resources/sun.jpg';

export default class VerticalMode extends Component {

  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }


  slide(y) {
    y > 0 ? (
      this.slider.slickPrev()
    ) : (
      this.slider.slickNext()
    )
  }
  componentDidMount() {
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



  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      
      <div id="community_main">
        <Slider {...settings} ref={slider => this.slider = slider}>
            {this.state.posts.map((post) => ( 
            <div className="CM_slick_div"  key={"post.id"}>
              <div id="p-profile">
                <div id="pic">
                  <img src="../resources/Home.png" alt="" />
                </div>
                <div id="profile-name">
                  <p>
                    <b>{post.name}</b>
                  </p>
                </div>
              </div>
              <div id="txt">
                  <p>{post.description}</p>
              </div>
                <div id="ed-photo">
                  <img id="post-pic" src={"data:image/jpeg;base64," + post?.imageinfo.image} alt="" />
                  
                </div>
              <div id="dsin">
                 {/* <ThumbUpOffAltIcon/>  */}
                  <p><span class="taab"><b>Like</b></span>
                  <span class="tab"><b>Comment</b></span>
                  <span class="ttab"><b>Share</b></span></p>
              </div>
            </div>

            ))}  
          {/* <div onClick={() => {this.handleClickSlide() }}>
            <img className="v_img" src={logo} alt="logo 1"></img>
            </div>
          */}
        </Slider>
      </div>
    );
  }
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/post_info");
  const posts = await res.json();
  // console.log(posts);
  return {
    props: { posts }
  };
}
