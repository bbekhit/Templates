import React, { useState } from "react";

const PushNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="push-nav-wrapper">
      <div className={`push-nav ${isOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={() => setIsOpen(false)}>
          X
        </div>
        <div className="list-item">About</div>
        <div className="list-item">Contact</div>
        <div className="list-item">Login</div>
      </div>
      <div
        className={`content ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(true)}
      >
        Hello There
      </div>
    </div>
  );
};

export default PushNav;
