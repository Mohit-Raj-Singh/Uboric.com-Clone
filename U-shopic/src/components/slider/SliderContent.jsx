import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <button className="btn">Shop now{slide.title}</button>
          {/* <h3 className="slide-text">{slide.description}</h3> */}
        </div>
      ))}
    </section>
  );
}

export default SliderContent;