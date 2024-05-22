import styled from "styled-components";

export const HomeHeaderContainer = styled.div`
  width: 100%;
  position: relative;
  height: calc(70vh - 59px);
  display: flex;
  background: #0e1111;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  z-index: 1;

  div div {
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;

export const HeaderImg = styled.img`
  width: 100%;
  opacity: 0.3;
  position: absolute;
  height: 100%;
  z-index: -1;
`;
