import styled from "styled-components";
import { Link } from "react-scroll";
import { navLinkStyle } from "../assets/styles";

export default function Nav({ navLinks }) {
  return (
    <Container>
      {navLinks.map((link) => (
        <NavItem key={link.id}>
          <Link smooth to={link.to}>
            {link.name}
          </Link>
        </NavItem>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  gap: 48px;
`;

const NavItem = styled.li`
  ${navLinkStyle}
`;
