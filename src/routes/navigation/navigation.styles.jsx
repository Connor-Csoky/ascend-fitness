import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  justify-content: space-between;
  padding: 15px;
  z-index: 100;
  transition: background 0.5s;

  a {
    color: white;
  }
`;

export const NavigationLogo = styled.div`
  width: 30px;
  height: 30px;
`;

export const NavigationLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
