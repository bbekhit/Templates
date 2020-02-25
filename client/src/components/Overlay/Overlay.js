import React from "react";
import img from "../../images/man-156584_640.png";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const Overlay = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card ">
          <div className="overlay-fade">
            <div className="text">Hello There</div>
            <div className="icon">
              <FaInstagram />
            </div>
          </div>
          <div className="image">
            <img src={img} alt="mountains" />
          </div>
          <div className="content">
            <h4>Joe Doe</h4>
            <h6>Engineer</h6>
            <h6>Apple Systems Inc</h6>
          </div>
          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
          </div>
        </div>
        <div className="card ">
          <div className="overlay-box">
            <div className="text">Hello There</div>
          </div>
          <div className="image">
            <img src={img} alt="mountains" />
          </div>
          <div className="content">
            <h4>Joe Doe</h4>
            <h6>Engineer</h6>
            <h6>Apple Systems Inc</h6>
          </div>
          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
          </div>
        </div>
        <div className="card ">
          <div className="overlay-slide-down">
            <div className="text">Hello There</div>
          </div>
          <div className="image">
            <img src={img} alt="mountains" />
          </div>
          <div className="content">
            <h4>Joe Doe</h4>
            <h6>Engineer</h6>
            <h6>Apple Systems Inc</h6>
          </div>
          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
          </div>
        </div>
        <div className="card ">
          <div className="overlay-slide-up">
            <div className="text">Hello There</div>
          </div>
          <div className="image">
            <img src={img} alt="mountains" />
          </div>
          <div className="content">
            <h4>Joe Doe</h4>
            <h6>Engineer</h6>
            <h6>Apple Systems Inc</h6>
          </div>
          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
          </div>
        </div>
        <div className="card ">
          <div className="overlay-slide-left">
            <div className="text">Hello There</div>
          </div>
          <div className="image">
            <img src={img} alt="mountains" />
          </div>
          <div className="content">
            <h4>Joe Doe</h4>
            <h6>Engineer</h6>
            <h6>Apple Systems Inc</h6>
          </div>
          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
          </div>
        </div>
        <div className="card ">
          <div className="overlay-slide-right">
            <div className="text">Hello There</div>
          </div>
          <div className="image">
            <img src={img} alt="mountains" />
          </div>
          <div className="content">
            <h4>Joe Doe</h4>
            <h6>Engineer</h6>
            <h6>Apple Systems Inc</h6>
          </div>
          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
          </div>
        </div>
        <div className="card ">
          <div className="overlay-test">
            <div className="text">Hello There test</div>
          </div>
          <div className="image">
            <img src={img} alt="mountains" />
          </div>
          <div className="content">
            <h4>Joe Doe</h4>
            <h6>Engineer</h6>
            <h6>Apple Systems Inc</h6>
          </div>
          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
          </div>
        </div>
        {/* ********************************************************* */}
        <div className="card-wrapper">
          <img src="//unsplash.it/400/400" alt="" className="card__img" />
          <div className="card__text">
            <h3 className="card__title">Card title</h3>
            <p className="card__body">And here is some text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
