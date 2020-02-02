import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../components/layout/section-container';
import { H1, H4 } from '../components/headings';
import { P } from '../components/text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons';

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

const Description = styled(P)`
  margin-top: 4.8rem;
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 4.8rem;
`;

const SocialLinkContainer = styled.a`
  height: 5.6rem;
  width: 5.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  margin-right: 1.6rem;
`;

const SocialLink = ({ href, icon }) => (
  <SocialLinkContainer href={href} target='_blank'>
    <FontAwesomeIcon icon={icon} />
  </SocialLinkContainer>
);

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

      <Description>
        I am experienced in leveraging agile frameworks to provide a robust
        synopsis for high level overviews. Iterative approaches to corporate
        strategy foster collaborative thinking to further the overall value
        proposition.
      </Description>

      <SocialLinks>
        <SocialLink href='#' icon={faLinkedinIn} />
        <SocialLink href='#' icon={faGithub} />
        <SocialLink href='#' icon={faTwitter} />
        <SocialLink href='#' icon={faFacebookF} />
      </SocialLinks>
    </SectionContainer>
  );
};

export default AboutSection;
