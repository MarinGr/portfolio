import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import Nav from "./Nav";

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isShownMenu, setisShownMenu] = useState(false);

  function updateWidth() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, [width]);

  function showBurgerMenu() {
    setisShownMenu(true);
  }

  function hideBurgerMenu() {
    setisShownMenu(false);
  }

  return (
    <Container>
      <Logo>Marina Grishina</Logo>
      {width > 1024 && <Nav />}
      {isShownMenu && width < 1024 ? (
        <>
          <CloseMenuIcon onClick={hideBurgerMenu} />
          <Nav />
        </>
      ) : (
        <>
          <MenuIcon onClick={showBurgerMenu} />
        </>
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

const Logo = styled.div``;

const burgerMenuStyles = css`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
  }
`;

const MenuIcon = styled(RxHamburgerMenu)`
  ${burgerMenuStyles}
`;

const CloseMenuIcon = styled(GrClose)`
  ${burgerMenuStyles}
`;
