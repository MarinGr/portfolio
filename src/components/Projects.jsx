import styled from "styled-components";
import { sectionTitleStyle } from "../assets/styles";
import { projectsData } from "../assets/data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Container id="projects">
      <Title>Projects</Title>
      <ProjectsContainer>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsContainer>
    </Container>
  );
}

const Container = styled.section``;

const Title = styled.h2`
  ${sectionTitleStyle}
  margin-bottom: 80px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
`;
