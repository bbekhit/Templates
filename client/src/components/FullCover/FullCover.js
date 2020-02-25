import React from "react";
import Button from "../StyledComponents/Button";
import StyledHeader from "../StyledComponents/StyledHeader";
import PureStyledButton from "../StyledComponents/PureStyledButton";

const FullCover = props => {
  return (
    <div>
      <section className="landing">
        <div className="landing-wrapper">
          <div className="navbar">
            <div className="logo">Toury</div>
            <ul className="nav-items">
              <li>About</li>
              <li>Contact</li>
              <li>Log In</li>
            </ul>
          </div>
          <div className="landing-tex">
            <h4>Welcome to Toury</h4>
          </div>
        </div>
        <Button title="hello There" />
        <PureStyledButton onClick={() => console.log("pure")}>
          Click
        </PureStyledButton>
      </section>
    </div>
  );
};

export default FullCover;
