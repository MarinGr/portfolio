import styled from "styled-components";
import About from "../sections/About";
import Contacts from "../sections/Contacts";
import Projects from "../sections/Projects";
import Stack from "../sections/Stack";

export default function Main() {
  return (
    <Container>
      <About />
      <Projects />
      <Stack />
      <Contacts />
    </Container>
  );
}

const Container = styled.main``;
