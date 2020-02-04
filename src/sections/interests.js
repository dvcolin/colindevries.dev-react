import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import SectionContainer from '../components/layout/section-container';
import { H2 } from '../components/headings';
import { PSmall } from '../components/text';
import SectionDivider from '../components/section-divider';

const StyledPSmall = styled(PSmall)(
  css({
    mb: 2
  })
);

const InterestsSection = () => {
  return (
    <>
      <SectionContainer>
        <H2>Interests</H2>
        <StyledPSmall>
          Apart from being a web developer, I enjoy listening to, mixing, and
          producing electronic music. I love putting on a great playlist while I
          sit down and code. In addition, I really enjoy going for walks,
          exploring new areas, playing tennis, and weight lifting.
        </StyledPSmall>
        <PSmall>
          I also really love watching stand up comedy and going to comedy clubs
          to see my favorite comedians in person. I'm curious about many things
          so I like to explore new things on the internet and YouTube. The
          internet provides an endless amount of interesting finds and
          entertainment.
        </PSmall>
      </SectionContainer>
      <SectionDivider />
    </>
  );
};

export default InterestsSection;
