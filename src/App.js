import React from 'react';
import Layout from './components/layout/layout';
import AboutSection from './sections/about';
import ExperienceSection from './sections/experience';

const App = () => {
  return (
    <Layout>
      <AboutSection />
      <ExperienceSection />
    </Layout>
  );
};

export default App;
