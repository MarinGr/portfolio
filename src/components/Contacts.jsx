import styled from "styled-components";
import { sectionTitleStyle, CTABtn } from "../assets/styles";
import { MdEmail } from "react-icons/md";
import SlideInSection from "./SlideInSection";
import { contentVariant } from "../utils/motion";
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <SlideInSection id="contacts">
      <Title variants={contentVariant}>Contact me</Title>
      <Desc variants={contentVariant}>
        Interested in working together? Please send me a message, I'll get back
        to you as soon as possible.
      </Desc>
      <EmailBtn
        href="mailto:
marina.grishn@gmail.com"
      >
        <EmailIcon />
        Email me
      </EmailBtn>
    </SlideInSection>
  );
}

// const Container = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   @media (max-width: 990px) {
//     margin-bottom: 20px;
//   }
// `;

const Title = styled(motion.h2)`
  ${sectionTitleStyle};
`;

const Desc = styled(motion.p)`
  margin: 0 auto;
  max-width: 40%;
  font-size: 18px;
  line-height: 160%;
  margin-bottom: 60px;
  text-align: center;

  @media (max-width: 990px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 140%;
  }
`;

const EmailBtn = styled(motion.a)`
  margin: 0 auto;
  ${CTABtn}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const EmailIcon = styled(MdEmail)`
  font-size: 20px;
`;
