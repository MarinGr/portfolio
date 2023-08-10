import styled from "styled-components";

export default function StackCard({ stack }) {
  return (
    <Container>
      <StackImg src={stack.img} alt={`${stack.title} image`} />
      <StackTitle>{stack.title}</StackTitle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const StackImg = styled.img`
  height: 120px;
  width: 120px;
`;

const StackTitle = styled.p``;
