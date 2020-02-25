import React, { useState } from "react";

const CurtinMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)} style={{ margin: "50px" }}>
        Click me
      </button>
      <div className={`curtain-wrapper ${isOpen ? "open" : ""}`}>
        <div className="menu">Hello</div>
      </div>
    </div>
  );
};

export default CurtinMenu;
