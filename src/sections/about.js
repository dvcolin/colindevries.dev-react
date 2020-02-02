import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../components/layout/section-container';
import { H1, H4 } from '../components/headings';

const Heading = styled(H1)`
  text-transform: uppercase;
`;

const PrimaryColor = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

const Subheading = styled(H4)`
  margin-top: 0.8rem;
  font-weight: 500;
  line-height: 1.4;
  text-transform: uppercase;
`;

const AboutSection = () => {
  return (
    <SectionContainer>
      <Heading>
        Colin
        <br />
        <PrimaryColor>de Vries</PrimaryColor>
      </Heading>
      <Subheading>
        22975 Santa Cruz Hwy &middot; Los Gatos, CA 95033 &middot; (408)
        300-8903 &middot;
        <PrimaryColor> colin@colindevries.dev</PrimaryColor>
      </Subheading>
    </SectionContainer>
  );
};

export default AboutSection;
