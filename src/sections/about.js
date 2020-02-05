import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
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
import SectionDivider from '../components/section-divider';

const Break = styled('br')(
  css({
    display: ['block', 'none']
  })
);

const PrimaryColor = styled('span')(
  css({
    color: 'primary',
    fontWeight: 'bold'
  })
);

const Subheading = styled(H4)(
  css({
    mb: 3
  })
);

const Description = styled(P)(
  css({
    mb: 3
  })
);

const SocialLinks = styled('div')(
  css({
    display: 'flex'
  })
);

const SocialLinkContainer = styled('a')(
  css({
    height: '5.6rem',
    width: '5.6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 2,
    bg: 'button',
    color: 'background',
    borderRadius: '50%',
    mr: 2,
    '&:hover': {
      bg: 'primary'
    }
  })
);

const SocialLink = ({ href, icon }) => (
  <SocialLinkContainer href={href} target='_blank'>
    <FontAwesomeIcon icon={icon} />
  </SocialLinkContainer>
);

const AboutSection = ({ setVisibleSection }) => {
  return (
    <>
      <SectionContainer id='about' setVisibleSection={setVisibleSection}>
        <H1>
          Colin
          <Break />
          <PrimaryColor> de Vries</PrimaryColor>
        </H1>
        <Subheading>
          Full Stack Software Developer &middot; Los Gatos, CA &middot; (408)
          300-8903 &middot;
          <PrimaryColor> colin@colindevries.dev</PrimaryColor>
        </Subheading>
        <Description>
          I am experienced in developing full-stack web applications, primarily
          using React and NodeJS. I'm currently attending Lambda School and will
          be graduating in early March 2020. Currently looking for opportunities
          in front-end development roles.
        </Description>

        <SocialLinks>
          <SocialLink href='#' icon={faLinkedinIn} />
          <SocialLink href='#' icon={faGithub} />
          <SocialLink href='#' icon={faTwitter} />
          <SocialLink href='#' icon={faFacebookF} />
        </SocialLinks>
      </SectionContainer>
      <SectionDivider />
    </>
  );
};

export default AboutSection;
