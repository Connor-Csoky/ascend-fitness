import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { useState } from "react";
import {
  NavigationContainer,
  NavigationLinkContainer,
  // NavigationLogo,
} from "./navigation.styles";

const Navigation = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <>
      <NavigationContainer
        className={colorChange ? "colorChange navbar" : "navbar"}
      >
        <Link to="/">Home</Link>
        <NavigationLinkContainer>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
          <Link to="get-started">Get Started</Link>
        </NavigationLinkContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
