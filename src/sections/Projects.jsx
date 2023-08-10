import styled from "styled-components";
import { sectionTitleStyle } from "../assets/styles";
import { projectsData } from "../assets/data/projectsData";
import ProjectCard from "../components/ProjectCard";
import SlideInSection from "../components/SlideInSection";
import { contentVariant } from "../utils/motion";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <SlideInSection id="projects">
      <Title variants={contentVariant}>Projects</Title>
      <ProjectsContainer variants={contentVariant}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsContainer>
    </SlideInSection>
  );
}

const Title = styled(motion.h2)`
  ${sectionTitleStyle}
  margin-bottom: 80px;
`;

const ProjectsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
`;
