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
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SectionDivider from '../components/section-divider';

const Break = styled('br')(
  css({
    display: ['block', 'none']
  })
);

const PrimaryColor = styled('span')(
  css({
    color: 'primary',
    fontWeight: 700
  })
);

const Subheading = styled(H4)(
  css({
    mt: [1, null, null, 0],
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
    fontSize: 4,
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
          Full Stack Web Developer &middot; Los Gatos, CA &middot; (408)
          300-8903 &middot;
          <PrimaryColor> colin@colindevries.dev</PrimaryColor>
        </Subheading>
        <Description>
          Hello! My name is Colin and I'm a full-stack web developer currently
          entrolled at Lambda School. I have extensive experience developing
          full-stack web applications using React and NodeJS. I'm always working
          on improving my programming skills, and am looking forward to the
          opportunity of working on a team to develop real-world applications.
          Currently looking for opportunities in front-end development roles.
        </Description>

        <SocialLinks>
          <SocialLink
            href='https://www.linkedin.com/in/dvcolin/'
            icon={faLinkedinIn}
          />
          <SocialLink href='https://github.com/dvcolin' icon={faGithub} />
          <SocialLink href='https://twitter.com/dv_divs' icon={faTwitter} />
          <SocialLink href='mailto:colin@colindevries.dev' icon={faEnvelope} />
        </SocialLinks>
      </SectionContainer>
      <SectionDivider />
    </>
  );
};

export default AboutSection;
