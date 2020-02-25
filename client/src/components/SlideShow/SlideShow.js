import React, { useState } from "react";
import img from "../../images/main.jpg";
import img1 from "../../images/mountain1.jpg";
import img2 from "../../images/mountain2.jpg";
import img3 from "../../images/mountain3.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
const SlideShow = () => {
  const images = [img, img1, img2, img3];
  const [position, setPosition] = useState(0);

  // let timerId;
  // useEffect(() => {
  //   timerId = setInterval(() => onChangeImagerRight(), 5000);
  // }, [position]);

  const onChangeImage = index => {
    if (index === position) {
      return;
    }
    setPosition(index);
  };
  const onChangeImageLeft = e => {
    e.stopPropagation();
    let newIndex = position - 1;
    setPosition(newIndex);
    if (position === 0) {
      let lastIndex = images.length - 1;
      setPosition(lastIndex);
    }
  };
  const onChangeImagerRight = e => {
    e.stopPropagation();
    let newIndex = position + 1;
    setPosition(newIndex);
    if (position === images.length - 1) {
      setPosition(0);
    }
  };
  return (
    <div>
      <div className="slideshow-wrapper">
        <div className="slide">
          <img
            src={images[position]}
            style={{ width: "100%", height: "100%" }}
            alt="mountains"
          />
          <div className="left">
            <MdKeyboardArrowLeft onClick={onChangeImageLeft} />
          </div>
          <div className="right">
            <MdKeyboardArrowRight onClick={onChangeImagerRight} />
          </div>
          <div className="dots">
            {images.map((item, i) => (
              <div
                className={`dot ${position === i ? "active" : ""}`}
                key={i}
              ></div>
            ))}
          </div>
        </div>
        <div className="title">Image Title</div>
        <div className="images">
          {images.map((item, i) => (
            <div className="image-container">
              <img
                src={images[i]}
                onClick={() => onChangeImage(i)}
                key={i}
                className={position === i ? "active" : ""}
                alt="mountains"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
