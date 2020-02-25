import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import img from "../../images/udemy.svg";

const NavbarUdemy = () => {
  const openSideNav = () => {
    let sideNav = document.querySelector(".side-nav-wrapper");
    let sideNavClose = document.querySelector(".side-nav-close");
    let sideNavTop = document.querySelector(".side-nav-top-welcome");
    sideNav.classList.add("open");
    sideNavTop.classList.add("animate");
    sideNavClose.classList.add("show");
  };
  const closeSideNav = () => {
    let sideNav = document.querySelector(".side-nav-wrapper");
    let sideNavClose = document.querySelector(".side-nav-close");
    let sideNavTop = document.querySelector(".side-nav-top-welcome");
    sideNav.classList.remove("open");
    sideNavTop.classList.remove("animate");
    sideNavClose.classList.remove("show");
  };
  return (
    <div >
      <div className="nav-mobile-wrapper">
        <div className="btn-search-wrapper">
          <div className="btn" onClick={openSideNav}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
        <div className="logo">
          <img
            src={img}
            style={{ width: "100%", height: "100%" }}
            alt="mountains"
          />
        </div>
        <div className="search-input-wrapper">
          <div className="search-input-wrapper-left">
            <FiGrid className="grid" />
            <h6>Categories</h6>
          </div>
          <div className="search-input-wrapper-right">
            <input />
            <FaSearch className="search" />
          </div>
        </div>
        <div className="cart">
          <FaShoppingCart />
        </div>
      </div>
      <div className="side-nav-wrapper">
        <div className="side-nav">
          <div className="side-nav-top">
            <div className="side-nav-top-letters">BB</div>
            <div className="side-nav-top-welcome">
              <h6>Hi, Boutros Bekhit</h6>
              <h6>Welcome back</h6>
            </div>
            <div className="side-nav-top-logo">
              <MdKeyboardArrowRight />
            </div>
          </div>
          <ul className="side-nav-items">
            <li>About</li>
            <li>More</li>
            <li>LogIn</li>
          </ul>
        </div>
      </div>
      <div className="side-nav-close" onClick={closeSideNav}>
        X
      </div>
    </div>
  );
};

export default NavbarUdemy;
