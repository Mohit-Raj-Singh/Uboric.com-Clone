import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../slider/ThirdSlider.module.css";
import {BsHeart,BsHandbag} from "react-icons/bs"
import {AiOutlineEye} from "react-icons/ai"
// import { color } from "@chakra-ui/react";


export default class ThirdSlide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    };
    return (
   <div>
        {/* <h2> Multiple items </h2> */}
        <Slider {...settings}>
  <div className={styles.multipleitem}>
            <img src="1.jpg" alt="avtar" className={styles.image}/>
            <div class={styles.overlay}>
              <div className={styles.logo}>
                 <BsHeart/>
              </div>
              <div className={styles.logos}>
              <a href="checkout"><BsHandbag/></a>
              </div>
              <AiOutlineEye style={{marginLeft:"12%",height:"50%",width:"20%",marginTop:"3.7%",color:"white"}}/>
    <div class={styles.text}> Quick View
    </div>
  </div>
 {/* <p className={styles.sale} style={{backgroundColor:"black"}}>SALE</p>  */}
 <div className={styles.des}>
    <p >Men shirt magic cotton with digital print..</p>
     <div className={styles.price}>
     <p style={{color:"#b2b2b2"}} ><s>₹1,199.00</s></p>
 <p style={{color:"orange"}} >₹795.00</p>
     </div>
  </div> 
</div>
          
          <div className={styles.multipleitem}>
            <img src="2.jpg" alt="avtar" className={styles.image}/>
            <div class={styles.overlay}>
              <div className={styles.logo}>
                 <BsHeart/>
              </div>
              <div className={styles.logos}>
              <a href="checkout"><BsHandbag/></a>
              </div>
       
              <AiOutlineEye style={{marginLeft:"12%",height:"50%",width:"20%",marginTop:"3.7%",color:"white"}}/>
    <div class={styles.text}> Quick View
    </div>
  </div>
  <div className={styles.des}>
    <p >Men shirt magic cotton with digital print..</p>
     <div className={styles.price}>
     <p style={{color:"#b2b2b2"}} ><s>₹1,199.00</s></p>
 <p style={{color:"orange"}} >₹795.00</p>
     </div>
  </div> 
  {/* <p className={styles.sale} style={{backgroundColor:"black"}}>SALE</p>  */}
          </div>
          <div className={styles.multipleitem}>
            <img src="10.jpg" alt="avtar" className={styles.image}/>
            <div class={styles.overlay}>
              <div className={styles.logo}>
                 <BsHeart/>
              </div>
              <div className={styles.logos}>
              <a href="checkout"><BsHandbag/></a>
              </div>

              <AiOutlineEye style={{marginLeft:"12%",height:"50%",width:"20%",marginTop:"3.7%",color:"white"}}/>
    <div class={styles.text}> Quick View
    </div>
  </div>
  <div className={styles.des}>
    <p >Men shirt magic cotton with digital print..</p>
     <div className={styles.price}>
     <p style={{color:"#b2b2b2"}} ><s>₹1,199.00</s></p>
 <p style={{color:"orange"}} >₹795.00</p>
     </div>
  </div> 
  {/* <p className={styles.sale} style={{backgroundColor:"black"}}>SALE</p>  */}
          </div>
          <div className={styles.multipleitem}>
            <img src="5.jpg" alt="avtar" className={styles.image}/>
            <div class={styles.overlay}>
              <div className={styles.logo}>
                 <BsHeart/>
              </div>
              <div className={styles.logos}>
              <a href="checkout"><BsHandbag/></a>
              </div>
              
              <AiOutlineEye style={{marginLeft:"12%",height:"50%",width:"20%",marginTop:"3.7%",color:"white"}}/>
    <div class={styles.text}> Quick View
    </div>
  </div>
  <div className={styles.des}>
    <p >Men shirt magic cotton with digital print..</p>
     <div className={styles.price}>
     <p style={{color:"#b2b2b2"}} ><s>₹1,199.00</s></p>
 <p style={{color:"orange"}} >₹795.00</p>
     </div>
  </div> 
  {/* <p className={styles.sale} style={{backgroundColor:"black"}}>SALE</p>  */}
          </div>
          <div className={styles.multipleitem}>
            <img src="6.jpg" alt="avtar" className={styles.image}/>
            <div class={styles.overlay}>
              <div className={styles.logo}>
                 <BsHeart/>
              </div>
              <div className={styles.logos}>
              <a href="checkout"><BsHandbag/></a>
              </div>
              <AiOutlineEye style={{marginLeft:"12%",height:"50%",width:"20%",marginTop:"3.7%",color:"white"}}/>
    <div class={styles.text}> Quick View
    </div>
  </div>
  <div className={styles.des}>
    <p >Men shirt magic cotton with digital print..</p>
     <div className={styles.price}>
     <p style={{color:"#b2b2b2"}} ><s>₹1,199.00</s></p>
 <p style={{color:"orange"}} >₹795.00</p>
     </div>
  </div> 
  {/* <p className={styles.sale} style={{backgroundColor:"black"}}>SALE</p>  */}
          </div>
          <div className={styles.multipleitem}>
            <img src="7.jpg" alt="avtar" className={styles.image}/>
            <div class={styles.overlay}>
              <div className={styles.logo}>
                 <BsHeart/>
              </div>
              <div className={styles.logos}>
              <a href="checkout"><BsHandbag/></a>
              </div>

              <AiOutlineEye style={{marginLeft:"12%",height:"50%",width:"20%",marginTop:"3.7%",color:"white"}}/>
    <div class={styles.text}> Quick View
    </div>
  </div>
  <div className={styles.des}>
    <p >Men shirt magic cotton with digital print..</p>
     <div className={styles.price}>
     <p style={{color:"#b2b2b2"}} ><s>₹1,199.00</s></p>
 <p style={{color:"orange"}} >₹795.00</p>
     </div>
  </div> 
  {/* <p className={styles.sale} style={{backgroundColor:"black"}}>SALE</p>  */}
          </div>
          <div className={styles.multipleitem}>
            <img src="9.jpg" alt="avtar" className={styles.image}/>
            <div class={styles.overlay}>
              <div className={styles.logo}>
                 <BsHeart/>
              </div>
              <div className={styles.logos}>
              <a href="checkout"><BsHandbag/></a>
              </div>

              <AiOutlineEye style={{marginLeft:"12%",height:"50%",width:"20%",marginTop:"3.7%",color:"white"}}/>
    <div class={styles.text}> Quick View
    </div>
  </div>
  <div className={styles.des}>
    <p >Men shirt magic cotton with digital print..</p>
     <div className={styles.price}>
     <p style={{color:"#b2b2b2"}} ><s>₹1,199.00</s></p>
 <p style={{color:"orange"}} >₹795.00</p>
     </div>
  </div> 
  {/* <p className={styles.sale} style={{backgroundColor:"black"}}>SALE</p>  */}
          </div>
          <div className={styles.multipleitem}>
            <img src="4.jpg" alt="avtar" className={styles.image}/>
            <div class={styles.overlay}>
              <div className={styles.logo}>
                 <BsHeart/>
              </div>
              <div className={styles.logos}>
              <a href="checkout"><BsHandbag/></a>
              </div>

              <AiOutlineEye style={{marginLeft:"12%",height:"50%",width:"20%",marginTop:"3.7%",color:"white"}}/>
    <div class={styles.text}> Quick View
    </div>
  </div>
  <div className={styles.des}>
    <p >Men shirt magic cotton with digital print..</p>
     <div className={styles.price}>
     <p style={{color:"#b2b2b2"}} ><s>₹1,199.00</s></p>
 <p style={{color:"orange"}} >₹795.00</p>
     </div>
  </div> 
  {/* <p className={styles.sale} style={{backgroundColor:"black"}}>SALE</p>  */}
          </div>
        
    
        </Slider>
      </div>
      
    );
  }
}