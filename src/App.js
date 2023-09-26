import "./App.css";
import { useState } from "react";

let arrayOfImg = [
  "../images/img-1.jpg",
  "../images/img-2.jpg",
  "../images/img-3.jpg",
  "../images/img-4.jpg",
  "../images/img-5.jpg",
];

function App() {
  const [currentImg, setCurentImg] = useState(0);
  function PrevSlide() {
    setCurentImg(currentImg === 0 ? arrayOfImg.length - 1 : currentImg - 1);
  }
  function nextSlide() {
    setCurentImg(currentImg === arrayOfImg.length - 1 ? 0 : currentImg + 1);
  }

  return (
    <>
      <div className="imageSlider_wrapper">
        <h2 className="heading">Image Slider</h2>
        <div className="images_wrapper">
          <div className="arrow_wrapper" onClick={PrevSlide}>
            <span className="arrow left"></span>
          </div>
          {arrayOfImg.map((imgSrc, index) => {
            return (
              currentImg === index && (
                <img
                  src={imgSrc}
                  key={imgSrc}
                  alt="natureImage"
                  className={`sliderImg ${currentImg === index ? "active":""}`}
                ></img>
              )
            );
          })}

          <div className="arrow_wrapper" onClick={nextSlide}>
            <span className="arrow right"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
