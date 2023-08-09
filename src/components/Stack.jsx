import styled from "styled-components";
import { sectionTitleStyle } from "../assets/styles";
import StackCard from "./StackCard";
import { stackData } from "../assets/data/stackData";
import SlideInSection from "./SlideInSection";
import { motion } from "framer-motion";

export default function Stack() {
  return (
    <Container
      id="stack"
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
    >
      <Title variants={contentVariant}>Stack</Title>
      <StackContainer variants={contentVariant}>
        {stackData.map((stack) => (
          <StackCard key={stack.id} stack={stack} />
        ))}
      </StackContainer>
    </Container>
  );
}

const fadeInVariant = {
  hidden: {
    transition: {},
  },
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const contentVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const Container = styled(motion.section)``;

const Title = styled(motion.h2)`
  ${sectionTitleStyle}
`;

const StackContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
