import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../components/layout/section-container';

const H1 = styled.h1`
  font-size: 6.4rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

const AboutSection = () => {
  return (
    <SectionContainer>
      <H1>
        Colin
        <br />
        de Vries
      </H1>
    </SectionContainer>
  );
};

export default AboutSection;
