import React, { Component } from "react";
import Slider from "react-slick";
import {BsHeart,BsHandbag} from "react-icons/bs"
// import styles from "../Slider/SecondSlider.module.css"
import styles from "../slider/SecondSlider.module.css"
import {AiOutlineEye} from "react-icons/ai"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}

      style={{ ...style,marginRight:"2rem",
      borderRadius:"12px",marginTop:"18%", display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,marginTop:"18%",
      marginLeft:"2rem", display: "block", 
      background: "gray" ,borderRadius:"12px" }}
      onClick={onClick}
    />
  );
}

export default class secondSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        {/* <h2>Custom Arrows</h2> */}
        <Slider {...settings}>
        <div className={styles.container}>
        <p className={styles.black}>
        SALE</p>
  <img src="me.jpg" alt="me" className={styles.image}/>
  
  <div className={styles.overlay}>
    <div className={styles.image}>
    {/* <p style={{marginTop:"-0px",backgroundColor:"black",width:"70px"}}>SALE</p> */}
    <img src="mo.jpg" style={{height:"370px" ,width:"370px"}} alt="Avatar"/>
    <div className={styles.logo}>
              <BsHeart/>
              </div>
              <div className={styles.logos}>
              <a href="checkout"><BsHandbag/></a>
              </div>
    <AiOutlineEye 
    style={{marginLeft:"1%",height:"50%",width:"20%",marginTop:"1%",color:"white"}}/>

    <p className={styles.texts}>Quick view</p>
    </div>
  </div>
  <h1 className={styles.module}>Quick & Easy 6 Blade Push Chopper 1000ML</h1>
 <div className={styles.mods}>
 <p style={{color:"#b2b2b2"}} ><s>₹799.00</s></p>
 <p style={{color:"orange"}} >₹399.00</p>
 </div>
</div>
<div className={styles.container}>
<p className={styles.black}>SALE</p>
  <img src="full2.jpg" alt="Avatar" className={styles.image}/>
  <div className={styles.overlay}>
    <div className={styles.image}>
    <img src="two.jpg" style={{height:"370px" ,width:"370px"}} alt="Avatar"/>
    <AiOutlineEye style={{color:"white"}}/>
    <p className={styles.texts}>Quick view</p>
    </div>
  </div>
  <h1 className={styles.module}>FINACHI 100% Combed Bio Wash Cotton Brief...</h1>
 <div className={styles.mods}>
 <p style={{color:"#b2b2b2"}} ><s>₹1,499.00</s></p>
 <p style={{color:"orange"}} >₹799.00</p>
 </div>
</div>
<div className={styles.container}>
<p className={styles.black}>SALE</p>
  <img src="full.jpg" alt="Avatar" className={styles.image}/>
  <div className={styles.overlay}>
    <div className={styles.image}>
    <img src="3.jpg" style={{height:"370px" ,width:"370px"}} alt="Avatar"/>
    <AiOutlineEye style={{color:"white"}}/>
    <p className={styles.texts}>Quick view</p>
    </div>
  </div>
  <h1 className={styles.module}>FINACHI 100% Combed Bio Wash Cotton Brief...</h1>
 <div className={styles.mods}>
 <p style={{color:"#b2b2b2"}} ><s>₹799.00</s></p>
 <p style={{color:"orange"}} >₹499.00</p>
 </div>
</div>
<div className={styles.container}>
<p className={styles.black}>SALE</p>
  <img src="finachi.jpg" alt="Avatar"
   className={styles.image}/>
  <div className={styles.overlay}>
    <div className={styles.image}>
    {/* <p className={styles.black}>SALE</p> */}
    <img src="ones.jpg" style={{height:"370px",width:"370px"}}alt="Avatar"/>
    <AiOutlineEye style={{color:"white"}}/>
    <p className={styles.texts}>Quick view</p>
    </div>
  </div>
  <h1 className={styles.module} style={{marginTop:"3%"}}>FINACHI 100% Combed Bio Wash Cotton Brief...</h1>
 <div className={styles.mods}>
 <p style={{color:"#b2b2b2"}}><s>₹1,499.00</s></p>
 <p style={{color:"orange"}} >₹849.00</p>
 </div>
</div>
</Slider>
      </div>
    );
  }
}