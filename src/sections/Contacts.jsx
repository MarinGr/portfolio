import styled, { css } from "styled-components";
import { sectionTitleStyle } from "../assets/styles";
import SlideInSection from "../components/SlideInSection";
import {
  contentVariant,
  floatImgContainerVariant,
  floatImgVariant,
} from "../utils/motion";
import { motion } from "framer-motion";
import codingImg from "../assets/images/globalImages/coding.png";
import { Github, Telegram, Email } from "../assets/icons/icons";
import Blob from "../components/Blob";

export default function Contacts() {
  return (
    <SlideInSection id="contacts">
      <TextContent>
        <Title variants={contentVariant}>Contact me</Title>
        <Desc variants={contentVariant}>
          Interested in working together? Please send me a message, I'll get
          back to you as soon as possible.
        </Desc>
        <BtnsContainer variants={contentVariant}>
          <Btn href="https://github.com/MarinGr" target="_blank">
            <GithubIcon alt="github" />
            <BtnDesc>GitHub</BtnDesc>
          </Btn>

          <Btn href="https://t.me/marina_grishn" target="_blank">
            <TelegramIcon alt="telegram" />
            <BtnDesc>Telegram</BtnDesc>
          </Btn>

          <Btn href="mailto:marina.grishn@gmail.com">
            <EmailIcon alt="email" />
            <BtnDesc>Email</BtnDesc>
          </Btn>
        </BtnsContainer>
      </TextContent>
      <FloatImgContainer variants={floatImgContainerVariant}>
        <Blob />
        <FloatImg
          src={codingImg}
          alt="coding person"
          variants={floatImgVariant}
        />
      </FloatImgContainer>
    </SlideInSection>
  );
}

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled(motion.h2)`
  ${sectionTitleStyle};
  margin-top: 120px;
`;

const Desc = styled(motion.p)`
  text-align: center;
  max-width: 40%;
  font-size: 18px;
  line-height: 160%;
  margin-bottom: 40px;

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
  margin-bottom: 120px;
  display: flex;
  justify-content: center;
  gap: 44px;
  color: var(--primary-color);
`;

const Btn = styled.a`
  background-color: var(--white);
  color: var(--primary-color);
  outline: 1px solid var(--primary-color);
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
    background-color: var(--primary-color-active);
  }

  @media (max-width: 990px) {
    padding: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
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

const GithubIcon = styled(Github)`
  ${iconStyles};
  font-size: 30px;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const TelegramIcon = styled(Telegram)`
  ${iconStyles};
`;

const EmailIcon = styled(Email)`
  ${iconStyles};
`;

const FloatImgContainer = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  right: 220px;
  bottom: 200px;

  @media (max-width: 1440px) {
    right: 160px;
  }

  @media (max-width: 1280px) {
    display: none;
  }
`;

const FloatImg = styled(motion.img)`
  position: absolute;
  bottom: 180px;
`;
