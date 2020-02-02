import React from 'react';
import Layout from './components/layout/layout';
import AboutSection from './sections/about';
import ExperienceSection from './sections/experience';
import EducationSection from './sections/education';
import SkillsSection from './sections/skills';
import InterestsSection from './sections/interests';

const App = () => {
  return (
    <Layout>
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <InterestsSection />
    </Layout>
  );
};

export default App;
