import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../components/layout/section-container';
import { H1, H3 } from '../components/headings';

const Heading = styled(H1)`
  text-transform: uppercase;
`;

const HeadingPrimary = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const Subheading = styled(H3)`
  margin-top: 0.8rem;
  line-height: 1.2;
  text-transform: uppercase;
`;

const AboutSection = () => {
  return (
    <SectionContainer>
      <Heading>
        Colin
        <br />
        <HeadingPrimary>de Vries</HeadingPrimary>
      </Heading>
      <Subheading>
        Full Stack Web Developer &middot; Los Gatos, CA &middot;
        colin@colindevries.dev
      </Subheading>
    </SectionContainer>
  );
};

export default AboutSection;
