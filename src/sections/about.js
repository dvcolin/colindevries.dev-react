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

const PrimaryColor = styled('span')(
  css({
    color: 'primary',
    fontWeight: 700
  })
);

const Subheading = styled(H4)(
  css({
    mt: '0.8rem',
    fontWeight: 500,
    lineHeight: '1.4',
    textTransform: 'uppercase'
  })
);

const Description = styled(P)(
  css({
    mt: '4.8rem'
  })
);

const SocialLinks = styled('div')(
  css({
    display: 'flex',
    mt: '4.8rem'
  })
);

const SocialLinkContainer = styled('a')(
  css({
    height: '5.6rem',
    width: '5.6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2.4rem',
    bg: 'secondary',
    color: 'background',
    borderRadius: '50%',
    mr: '1.6rem'
  })
);

const SocialLink = ({ href, icon }) => (
  <SocialLinkContainer href={href} target='_blank'>
    <FontAwesomeIcon icon={icon} />
  </SocialLinkContainer>
);

const AboutSection = () => {
  return (
    <>
      <SectionContainer>
        <H1>
          Colin
          <br />
          <PrimaryColor>de Vries</PrimaryColor>
        </H1>
        <Subheading>
          22975 Santa Cruz Hwy &middot; Los Gatos, CA 95033 &middot; (408)
          300-8903 &middot;
          <PrimaryColor> colin@colindevries.dev</PrimaryColor>
        </Subheading>

        <Description>
          I am experienced in developing full-stack web applications, primarily
          using React and NodeJs. I'm currently attending Lambda School and will
          be graduating in March. Currently looking for opportunities in
          front-end development roles.
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
