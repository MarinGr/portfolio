import styled from "styled-components";
import { Link } from "react-scroll";

export default function Nav() {
  return (
    <Container>
      <NavItem>
        <Link smooth to="about">
          About
        </Link>
      </NavItem>
      <NavItem>
        <Link smooth to="projects">
          Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link smooth to="stack">
          Stack
        </Link>
      </NavItem>
      <NavItem>
        <Link smooth to="contacts">
          Contacts
        </Link>
      </NavItem>
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  gap: 48px;

  @media (max-width: 1024px) {
    flex-direction: column;
    position: absolute;
    top: 72px;
    right: 0;
    padding: 40px;
    padding-left: 60px;
    background: var(--burger-nav-bg-color);
    color: var(--text-color-primary);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  transition: 0.3s ease-in-out;
  padding-bottom: 4px;

  &:hover {
    color: var(--primary-color);
    box-shadow: 0 3px 0 var(--primary-color);
  }

  &:active {
    color: var(--primary-color-active);
    box-shadow: 0 3px 0 var(--primary-color-active);
  }
`;
