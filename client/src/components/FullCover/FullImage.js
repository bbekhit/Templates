import React from "react";
import img from "../../images/main.jpg";

const FullImage = () => {
  return (
    <div>
      <section className="landing">
        <div className="landing-wrapper">
          <img src={img} className="image" alt="mountains" />
          <div className="navbar">
            <div className="logo">Toury</div>
            <ul className="nav-items">
              <li>About</li>
              <li>Contact</li>
              <li>Log In</li>
            </ul>
          </div>
          <div className="landing-text">
            <h4>Welcome to Toury</h4>
            <div className="btns-wrapper">
              <button>Sign In</button>
              <button>Sign Up</button>
            </div>
          </div>
          <div className="landing-text-transparent">
            <h4>Welcome to Toury</h4>
            <div className="btns-wrapper">
              <button>Sign In</button>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullImage;
