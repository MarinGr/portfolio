import styled from "styled-components";
import { sectionTitleStyle } from "../assets/styles";
import StackCard from "./StackCard";
import { stackData } from "../assets/data/stackData";

export default function Stack() {
  return (
    <Container id="stack">
      <Title>Stack</Title>
      <StackContainer>
        {stackData.map((stack) => (
          <StackCard key={stack.id} stack={stack} />
        ))}
      </StackContainer>
    </Container>
  );
}

const Container = styled.section``;

const Title = styled.h2`
  ${sectionTitleStyle}
`;

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
