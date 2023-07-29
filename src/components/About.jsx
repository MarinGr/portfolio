import styled, { css } from "styled-components";
import { linkHoverStyles, CTABtn } from "../assets/styles";
import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import { FiArrowDown } from "react-icons/fi";

export default function About() {
  return (
    <Container id="about">
      <TextContent>
        <Title>
          Hello, I'm Marina,
          <br /> Frontend Developer
        </Title>
        <Desc>
          I am passionate about building web applications with React and Vue.
        </Desc>
        <LinksContainer>
          <Link href="https://github.com/MarinGr" target="_blank">
            <GithubIcon />
            <LinkDesc>Github</LinkDesc>
          </Link>
          <Link
            href="mailto:
marina.grishn@gmail.com"
          >
            <EmailIcon />
            <LinkDesc>marina.grishn@gmail.com</LinkDesc>
          </Link>
        </LinksContainer>
        <ScrollLink smooth to="projects">
          <Btn>
            View my work <ArrowDownIcon />
          </Btn>
        </ScrollLink>
      </TextContent>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TextContent = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1280px) {
    max-width: 80%;
  }

  @media (max-width: 990px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  background-color: var(--primary-color);
  background: var(--text-color-headline);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 48px;
    margin-bottom: 28px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 24px;
  }
`;

const Desc = styled.p`
  font-size: 22px;
  line-height: 160%;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 28px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 48px;
  margin-bottom: 72px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
    margin-bottom: 60px;
  }

  @media (max-width: 480px) {
    gap: 28px;
    margin-bottom: 48px;
  }
`;

const linkStyles = css`
  ${linkHoverStyles}
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Link = styled.a`
  ${linkStyles}
`;

const EmailIcon = styled(MdEmail)``;

const GithubIcon = styled(AiFillGithub)``;

const LinkDesc = styled.p``;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  ${CTABtn};
`;
const ArrowDownIcon = styled(FiArrowDown)`
  font-size: 20px;
`;
