import { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { Link } from "react-scroll";
import SidebarNav from "./SidebarNav";

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isShownMenu, setIsShownMenu] = useState(false);

  const navLinks = [
    { name: "About", to: "about", id: 1 },
    { name: "Stack", to: "stack", id: 2 },
    { name: "Projects", to: "projects", id: 3 },
    { name: "Contacts", to: "contacts", id: 4 },
  ];

  function updateWidth() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, [width]);

  function showBurgerMenu() {
    setIsShownMenu(true);
  }

  function hideBurgerMenu() {
    setIsShownMenu(false);
  }

  return (
    <Container>
      <Link smooth to="about">
        <Logo>Marina Grishina</Logo>
      </Link>

      {width > 1024 ? (
        <Nav navLinks={navLinks} />
      ) : (
        <SidebarNav
          navLinks={navLinks}
          isShownMenu={isShownMenu}
          showBurgerMenu={showBurgerMenu}
          hideBurgerMenu={hideBurgerMenu}
        />
      )}
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

const Logo = styled.div`
  cursor: pointer;
`;
