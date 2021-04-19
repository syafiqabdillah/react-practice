import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 40px;
  margin: 1rem 0 0;
  background-color: ${props => props.bg};
  font-size: 1.25rem;
  color: white;
  border: none;
  text-transform: uppercase;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${props => props.bgHover};
    cursor: pointer;
  }
`;
export default Button;
