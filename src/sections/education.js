import React from 'react';
import SectionContainer from '../components/layout/section-container';
import { H2, H3, H4 } from '../components/headings';
import SectionDivider from '../components/section-divider';

const EducationSection = () => {
  return (
    <>
      <SectionContainer>
        <H2>Education</H2>
        <H3>Lambda School</H3>
        <H4>Full Stack Web Development</H4>
      </SectionContainer>
      <SectionDivider />
    </>
  );
};

export default EducationSection;
