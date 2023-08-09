import styled, { css } from "styled-components";
import { sectionTitleStyle } from "../assets/styles";
import SlideInSection from "./SlideInSection";
import { contentVariant } from "../utils/motion";
import { motion } from "framer-motion";

import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

export default function Contacts() {
  return (
    <SlideInSection id="contacts">
      <Title variants={contentVariant}>Contact me</Title>
      <Desc variants={contentVariant}>
        Interested in working together? Please send me a message, I'll get back
        to you as soon as possible.
      </Desc>
      <BtnsContainer variants={contentVariant}>
        <Btn href="https://github.com/MarinGr" target="_blank">
          <GithubIcon />
          <BtnDesc>GitHub</BtnDesc>
        </Btn>

        <Btn href="https://t.me/marina_grishn" target="_blank">
          <TelegramIcon />
          <BtnDesc>Telegram</BtnDesc>
        </Btn>

        <Btn href="mailto:marina.grishn@gmail.com">
          <EmailIcon />
          <BtnDesc>Email</BtnDesc>
        </Btn>
      </BtnsContainer>
    </SlideInSection>
  );
}

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

const BtnsContainer = styled(motion.div)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 40px;
  color: var(--primary-color);
`;

const Btn = styled.a`
  background-color: var(--white);
  outline: 2px solid var(--primary-color);
  font-size: 18px;
  font-weight: 500;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: var(--btn-shadow);
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
  }

  &:active {
    background-color: var(--primary-color);
    outline: 2px solid var(--primary-color);
  }

  @media (max-width: 990px) {
    padding: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    outline-width: 1px;
  }
`;

const iconStyles = css`
  font-size: 28px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const BtnDesc = styled.p`
  @media (max-width: 990px) {
    display: none;
  }
`;

const GithubIcon = styled(AiFillGithub)`
  ${iconStyles};
  font-size: 30px;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const TelegramIcon = styled(FaTelegram)`
  ${iconStyles};
`;

const EmailIcon = styled(MdEmail)`
  ${iconStyles};
`;
