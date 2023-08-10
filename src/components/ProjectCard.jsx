import styled from "styled-components";
import { linkHoverStyle } from "../assets/styles";
import { Github, LiveDemo } from "../assets/icons/icons";

export default function ProjectCard({ project }) {
  return (
    <Container>
      <ImageLink href={project.liveDemo} target="_blank">
        <ProjectImg src={project.img} alt={project.title} />
      </ImageLink>
      <ProjectTextContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDesc>{project.desc}</ProjectDesc>
        <ProjectStack>
          <StackTitle>Stack: </StackTitle>
          {project.stack}
        </ProjectStack>
        <ProjectLinksContainer>
          <ProjectLink href={project.github} target="_blank">
            <GithubIcon />
            <LinkDesc>Github</LinkDesc>
          </ProjectLink>
          <ProjectLink href={project.liveDemo} target="_blank">
            <LiveDemoIcon />
            <LinkDesc>Live demo</LinkDesc>
          </ProjectLink>
        </ProjectLinksContainer>
      </ProjectTextContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 500px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageLink = styled.a``;

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectTextContent = styled.div`
  padding: 0 30px 28px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 16px;
`;

const ProjectDesc = styled.p`
  margin-bottom: 22px;
  line-height: 140%;
`;

const ProjectStack = styled.div`
  margin-top: auto;
  margin-bottom: 32px;
  line-height: 140%;
`;

const StackTitle = styled.span`
  font-weight: 600;
`;

const ProjectLinksContainer = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

const ProjectLink = styled.a`
  ${linkHoverStyle}
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
`;

const GithubIcon = styled(Github)`
  font-size: 22px;
`;

const LiveDemoIcon = styled(LiveDemo)`
  font-size: 20px;
`;

const LinkDesc = styled.p`
  font-weight: 500;
`;
