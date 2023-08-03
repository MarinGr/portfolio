import styled from "styled-components";
import About from "./About";
import Contacts from "./Contacts";
import Projects from "./Projects";
import Stack from "./Stack";

export default function Main() {
  return (
    <Container>
      <About />
      <Stack />
      <Projects />
      {/* <Stack /> */}
      <Contacts />
    </Container>
  );
}

const Container = styled.main``;
