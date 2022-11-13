import React, { Component } from "react";
import Slider from "react-slick";
// import styles from "../../../../styles/Home.module.css"
import styles from "../../Styles/Home.module.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {GrPrevious,GrNext} from "react-icons/gr"




export default class TextSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 4,
      slidesToScroll: 3
    };
    return (
        
      <div className={styles.text}>
          
        {/* <h2> Multiple items </h2> */}
        <Slider {...settings}>
          {/* <div className={styles.text}></div> */}
          <div >
            <a href="shop"><h3 >Speakers(3)</h3></a>
            
          </div>
          <div >
            <h3 >Charger & cabel(27)</h3>
          </div>
          <div >
            <h3 >Powerbank(15)</h3>
          </div>
          <div >
            <h3 >Smart Watch(2)</h3>
          </div>
          <div >
            <h3 >Headphones(20)</h3>
          </div>
          <div >
            <h3 >trimmer(22)</h3>
          </div>
          <div >
            <h3 >Philips personal care(53)</h3>
          </div>
          <div >
            <a href="women">
            <h3 >Women(30)</h3>
            </a>
          </div>
          <div >
            <a href="men">
            <h3 >men(24)</h3>
            </a>
          </div>
          <div >
            <h3 >Accessories(9)</h3>
          </div>
        </Slider>
        <GrPrevious style={{marginRight:"10%",marginTop:"5px"}}/>
        <GrNext style={{marginLeft:"99%" ,marginBottom:"5rem"}}/>
      </div>
    );
  }
}