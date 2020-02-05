import React from 'react';
import SectionContainer from '../components/layout/section-container';
import { H2 } from '../components/headings';
import { PSmall } from '../components/text';
import SectionDivider from '../components/section-divider';

const ExperienceSection = ({ setVisibleSection }) => {
  return (
    <>
      <SectionContainer id='experience' setVisibleSection={setVisibleSection}>
        <H2>Experience</H2>
        <PSmall>
          Although I have no formal work experience in web development roles, I
          am anxious to get hired and start working on real-world applications.
          My education at Lambda School has provided me with all the skills I
          need to be a successful developer. I have extensive experience in
          front-end development with React, API development with NodeJS and
          Express, as well as database management with SQL and NoSQL databases.
        </PSmall>
      </SectionContainer>
      <SectionDivider />
    </>
  );
};

export default ExperienceSection;
