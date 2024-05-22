import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #e61d24;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 25px;
  transition: 0.3s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: transparent;
  color: white;
  border: 1px solid white;

  &:hover {
    background-color: #e61d24;
    border: 1px solid black;
  }
`;
