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
          Apart from being a web developer, I enjoy most of my time being
          outdoors. In the winter, I am an avid skier and novice ice climber.
          During the warmer months here in Colorado, I enjoy mountain biking,
          free climbing, and kayaking.
        </StyledPSmall>
        <PSmall>
          When forced indoors, I follow a number of sci-fi and fantasy genre
          movies and television shows, I am an aspiring chef, and I spend a
          large amount of my free time exploring the latest technology
          advancements in the front-end web development world.
        </PSmall>
      </SectionContainer>
      <SectionDivider />
    </>
  );
};

export default InterestsSection;
