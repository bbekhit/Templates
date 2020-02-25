import React, { useState } from "react";
import img from "../../images/udemy.svg";
import { FaCaretDown } from "react-icons/fa";

const DropNav = () => {
  const [openList, setOpenList] = useState([]);

  const addToOpenList = name => {
    let cloneOpenList = [...openList];
    let index = openList.indexOf(name);
    if (index === -1) {
      cloneOpenList.push(name);
    } else {
      cloneOpenList.splice(index, 1);
    }
    setOpenList(cloneOpenList);
  };

  const toggleClass = () => {
    const mainNav = document.querySelector(".nav-list");
    const btnBar = document.querySelectorAll(".bar");
    mainNav.classList.toggle("show");
    btnBar.forEach(item => item.classList.toggle("cross"));
  };
  return (
    <div>
      <div className="dropnav-wrapper">
        <div className="logo">
          <img
            src={img}
            style={{ width: "150px", height: "40px" }}
            alt="mountains"
          />
        </div>
        <ul className="nav-list">
          <li className="nav-item">Products</li>
          <li className="nav-item icon">
            Offers{" "}
            <span>
              <FaCaretDown
                onClick={() => addToOpenList("offers")}
                className="icon"
              />
            </span>
            <div
              class={`dropdown-content ${
                openList.includes("offers") ? "open" : ""
              }`}
            >
              <div href="#">Link 1</div>
              <div href="#">Link 2</div>
              <div href="#">Link 3</div>
            </div>
          </li>
          <li className="nav-item icon">
            About{" "}
            <span>
              <FaCaretDown
                onClick={() => addToOpenList("about")}
                className="icon"
              />
            </span>
            <div
              class={`dropdown-content ${
                openList.includes("about") ? "open" : ""
              }`}
            >
              <div href="#">Link 3</div>
              <div href="#">Link 4</div>
              <div href="#">Link 5</div>
            </div>
          </li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Map</li>
        </ul>
        <div className="btn" onClick={toggleClass}>
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </div>
    </div>
  );
};

export default DropNav;
