import styled from "styled-components";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container>
      <Copyright>© Marina Grishina {year}</Copyright>
    </Container>
  );
}

const Container = styled.footer`
  margin-top: auto;
`;

const Copyright = styled.p`
  @media (max-width: 990px) {
    text-align: center;
  }
`;
