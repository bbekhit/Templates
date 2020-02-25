import React from "react";
import img from "../../images/1600px-Chase-Bank.png";

const Navbar = () => {
  const toggleClass = () => {
    const mainNav = document.querySelector(".nav-list");
    const btnBar = document.querySelectorAll(".bar");
    mainNav.classList.toggle("show");
    btnBar.forEach(item => item.classList.toggle("cross"));
  };
  return (
    <div className="nav">
      <div className="logo">
        <img
          src={img}
          style={{ width: "150px", height: "40px" }}
          alt="mountains"
        />
      </div>
      <ul className="nav-list">
        <li className="nav-item">Products</li>
        <li className="nav-item">Offers</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Map</li>
      </ul>
      <div className="btn" onClick={toggleClass}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>
    </div>
  );
};

export default Navbar;
