import styled from "styled-components";

const color = "yellow";
const padding = "padding:1rem";
const margin = "margin:1rem";
const border = (width = "3px") => {
  return `border:solid ${width} red`;
};
export const Button = styled.button`
  ${padding};
  ${margin};
  color: red;
  background: blue;
  text-transform: uppercase;
  ${border("10px")};
`;
export const SecondButton = styled.button`
  color: ${color};
  background: var(--primaryColor);
  text-transform: uppercase;
  ${padding};
  ${margin};
  ${border()}
`;
// ********************************************************************
// extending
// import styled from "styled-components";

export const PropsButton = styled.button`
  color: white;
  padding: ${props => (props.big ? "3rem" : "1rem")};
  font-size: 2rem;
  margin: 1rem;
  background: url(${props => props.img});
`;
export const DangerButton = styled(PropsButton)`
  background: red;
`;
export const SuccessButton = styled(PropsButton)`
  background: green;
`;

// export const BigButton = styled(PropsButton)`
//   margin: 0.5rem;
//   text-transform: capitalize;
//   font-size: 3rem;
// `;
// ********************************************************************
//Main App.css

// :root {
//   --primaryColor: green;
// }
// * {
//   margin: 0;
//   box-sizing: border-box;
// }
// body {
//   font-family: Verdana, Geneva, Tahoma, sans-serif;
// }
// .global {
//   color: green;
//   text-transform: capitalize;
// }
// .first {
//   letter-spacing: 5px;
//   color: var(--primaryColor);
// }
// /* some other css */
// .second {
//   text-transform: uppercase;
//   color: var(--primaryColor);
// }
