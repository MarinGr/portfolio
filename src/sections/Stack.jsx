import styled from "styled-components";
import { sectionTitleStyle } from "../assets/styles";
import StackCard from "../components/StackCard";
import { stackData } from "../assets/data/stackData";
import SlideInSection from "../components/SlideInSection";
import { motion } from "framer-motion";
import { contentVariant } from "../utils/motion";

export default function Stack() {
  return (
    <SlideInSection id="stack">
      <Title variants={contentVariant}>Stack</Title>
      <StackContainer variants={contentVariant}>
        {stackData.map((stack) => (
          <StackCard key={stack.id} stack={stack} />
        ))}
      </StackContainer>
    </SlideInSection>
  );
}

const Title = styled(motion.h2)`
  ${sectionTitleStyle}
`;

const StackContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
