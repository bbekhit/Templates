import React from "react";
import styled from "styled-components";

const Button = props => {
  return (
    <StyledButtonWrapper>
      <div onClick={() => console.log(props.title)}>Click</div>
    </StyledButtonWrapper>
  );
};

const StyledButtonWrapper = styled.div`
  div {
    color: red;
    background: black;
    padding: 16px 28px;
    font-size: 20px;
    width: 150px;
  }
`;

export default Button;
