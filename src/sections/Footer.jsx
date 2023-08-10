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
  text-align: center;
`;

const Copyright = styled.p``;
