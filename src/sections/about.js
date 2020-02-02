import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../components/layout/section-container';
import { H1, H3 } from '../components/headings';

const Subheading = styled(H3)`
  margin-top: 0.8rem;
  line-height: 1.2;
`;

const AboutSection = () => {
  return (
    <SectionContainer>
      <H1>
        Colin
        <br />
        de Vries
      </H1>
      <Subheading>
        Full Stack Web Developer &middot; Los Gatos, California &middot;
        colin@colindevries.dev
      </Subheading>
    </SectionContainer>
  );
};

export default AboutSection;
