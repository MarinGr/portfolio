import styled from "styled-components";
import { fadeInVariant } from "../utils/motion";
import { motion } from "framer-motion";

export default function SlideInSection(props) {
  return (
    <Section
      id={props.id}
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {props.children}
    </Section>
  );
}

const Section = styled(motion.section)``;
