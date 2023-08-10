import styled, { css } from "styled-components";
import { linkHoverStyle } from "../assets/styles";
import { motion } from "framer-motion";
import {
  containerVariant,
  titleVariant,
  titlePartVariant,
  descVariant,
  linksContainerVariant,
  linksVariant,
  floatImgContainerVariant,
  floatImgVariant,
} from "../utils/motion";
import { Github, Telegram, Email } from "../assets/icons/icons";
import laptopImg from "../assets/images/globalImages/laptop.png";
import Blob from "../components/Blob";

export default function About() {
  return (
    <Container
      id="about"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <TextContent>
        <Title variants={titleVariant}>
          <TitlePart variants={titlePartVariant("left")}>
            Hello, I'm Marina
          </TitlePart>
          <TitlePart variants={titlePartVariant("right")}>
            Frontend Developer
          </TitlePart>
        </Title>
        <Desc variants={descVariant}>
          I am fascinated by the magic of transforming lines of code into
          beautiful apps we use everyday.
        </Desc>
        <LinksContainer variants={linksContainerVariant}>
          <Link
            variants={linksVariant}
            href="https://github.com/MarinGr"
            target="_blank"
          >
            <GithubIcon alt="github" />
            <LinkDesc>MarinGr</LinkDesc>
          </Link>

          <Link
            variants={linksVariant}
            href="https://t.me/marina_grishn"
            target="_blank"
          >
            <TelegramIcon alt="telegram" />
            <LinkDesc>@marina_grishn</LinkDesc>
          </Link>
          <Link variants={linksVariant} href="mailto:marina.grishn@gmail.com">
            <EmailIcon alt="email" />
            <LinkDesc>marina.grishn@gmail.com</LinkDesc>
          </Link>
        </LinksContainer>
      </TextContent>
      <FloatImgContainer variants={floatImgContainerVariant}>
        <Blob />
        <FloatImg src={laptopImg} alt="laptop" variants={floatImgVariant} />
      </FloatImgContainer>
    </Container>
  );
}

const Container = styled(motion.section)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 100vh;
  margin-top: 100px;

  @media (max-width: 480px) {
    margin-top: 40px;
  }
`;

const TextContent = styled(motion.div)`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1280px) {
    max-width: 80%;
  }

  @media (max-width: 990px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
`;

const Title = styled(motion.div)`
  font-family: var(--font-family-title);
  font-weight: 700;
`;

const TitlePart = styled(motion.h1)`
  font-size: 70px;
  background-color: var(--primary-color);
  background: var(--text-color-headline);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 52px;
  }

  @media (max-width: 480px) {
    font-size: 38px;
  }
`;

const Desc = styled(motion.p)`
  font-size: 22px;
  line-height: 150%;
  margin-top: 36px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 28px;
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const LinksContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const linkStyles = css`
  ${linkHoverStyle};
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  transform-origin: 0;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Link = styled(motion.a)`
  ${linkStyles};
`;

const iconStyles = css`
  font-size: 28px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const GithubIcon = styled(Github)`
  ${iconStyles};
  font-size: 30px;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const EmailIcon = styled(Email)`
  ${iconStyles};
`;

const TelegramIcon = styled(Telegram)`
  ${iconStyles};
`;

const LinkDesc = styled.p``;

const FloatImgContainer = styled(motion.div)`
  height: 300px;
  width: 300px;
  position: relative;

  @media (max-width: 1280px) {
    display: none;
  }
`;

const FloatImg = styled(motion.img)`
  position: absolute;
  left: 80px;
  bottom: 120px;
`;
