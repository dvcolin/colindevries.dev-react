import React, { useState } from 'react';
import Layout from './components/layout/layout';
import AboutSection from './sections/about';
import ExperienceSection from './sections/experience';
import EducationSection from './sections/education';
import SkillsSection from './sections/skills';
import InterestsSection from './sections/interests';
import ProjectsSection from './sections/projects';

const App = () => {
  const [visibleSection, setVisibleSection] = useState('about');
  return (
    <Layout visibleSection={visibleSection}>
      <AboutSection setVisibleSection={setVisibleSection} />
      <ExperienceSection setVisibleSection={setVisibleSection} />
      <EducationSection setVisibleSection={setVisibleSection} />
      <SkillsSection setVisibleSection={setVisibleSection} />
      <InterestsSection setVisibleSection={setVisibleSection} />
      <ProjectsSection setVisibleSection={setVisibleSection} />
    </Layout>
  );
};

export default App;
