import "./App.css";
import styled from "styled-components";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Main from "./sections/Main";

export default function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;
