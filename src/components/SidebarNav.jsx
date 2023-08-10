import React from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Close, Menu } from "../assets/icons/icons";
import { Link } from "react-scroll";
import { navLinkStyle } from "../assets/styles";
import { sidebarVariant } from "../utils/motion";

export default function SidebarNav({
  navLinks,
  isShownMenu,
  showBurgerMenu,
  hideBurgerMenu,
}) {
  return (
    <Container>
      {isShownMenu ? (
        <CloseMenuIcon onClick={() => hideBurgerMenu()} />
      ) : (
        <MenuIcon onClick={() => showBurgerMenu()} />
      )}

      <AnimatePresence>
        {isShownMenu && (
          <NavList
            variants={sidebarVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link) => (
              <NavItem key={link.id}>
                <Link smooth to={link.to}>
                  {link.name}
                </Link>
              </NavItem>
            ))}
          </NavList>
        )}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled(motion.div)``;

const burgerMenuStyles = css`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
  }
`;

const MenuIcon = styled(Menu)`
  ${burgerMenuStyles}
`;

const CloseMenuIcon = styled(Close)`
  ${burgerMenuStyles}
`;

const NavList = styled(motion.ul)`
  position: absolute;
  top: 100%;
  right: 0;
  padding: 40px 80px;
  height: 100vh;
  background: var(--transparent-bg-color);
  color: var(--text-color-primary);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const NavItem = styled(motion.li)`
  ${navLinkStyle};
  text-align: center;
  margin-bottom: 40px;
`;
