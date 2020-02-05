import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from './components/layout/layout';
import AboutSection from './sections/about';
import ExperienceSection from './sections/experience';
import EducationSection from './sections/education';
import SkillsSection from './sections/skills';
import InterestsSection from './sections/interests';
import ProjectsSection from './sections/projects';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Colin de Vries | Full Stack Web Developer</title>
      </Helmet>
      <Layout>
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <InterestsSection />
        <ProjectsSection />
      </Layout>
    </>
  );
};

export default App;
