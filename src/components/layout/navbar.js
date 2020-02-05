import React, { useState } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import image from '../../images/colin-devries.jpeg';

const NavbarContainer = styled('nav')(
  css({
    position: ['sticky', null, null, 'fixed'],
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: ['row', null, null, 'column'],
    alignItems: 'center',
    justifyContent: [null, null, null, 'center'],
    height: ['5.6rem', null, null, '100vh'],
    width: ['100%', null, null, '27.2rem'],
    px: 2,
    color: 'nav.linkActive',
    bg: 'primary'
  })
);

const Name = styled('div')(
  css({
    display: ['block', null, null, 'none'],
    fontSize: '2.2rem',
    fontWeight: 'bold'
  })
);

const NavToggleButton = styled('button')(
  css({
    display: ['block', null, null, 'none'],
    ml: 'auto',
    background: 'none',
    border: 'none',
    color: 'nav.linkActive',
    fontSize: '2.2rem',
    '&:focus': {
      outline: 'none'
    }
  })
);

const Image = styled('img')(
  css({
    display: ['none', null, null, 'block'],
    borderRadius: '50%',
    height: '16rem',
    width: '16rem',
    borderWidth: '0.8rem',
    borderStyle: 'solid',
    borderColor: 'rgba(255,255,255,.2)',
    objectFit: 'cover',
    objectPosition: 'center'
  })
);

const NavLinks = styled('div')(
  css({
    position: ['fixed', null, null, 'relative'],
    top: ['5.6rem', null, null, 0],
    left: 0,
    width: '100%',
    display: ['none', null, null, 'flex'],
    flexDirection: 'column',
    mt: [0, null, null, 2]
  }),
  props => ({
    display: `${props.visible ? 'flex' : null}`
  })
);

const NavLink = styled('a')(
  css({
    width: '100%',
    fontSize: '1.8rem',
    textDecoration: 'none',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 800,
    letterSpacing: '.06rem',
    bg: 'primary',
    py: 1,
    transition: 'all 100ms ease-out'
  }),
  props => ({
    color: `${
      props.active
        ? props.theme.colors.nav.linkActive
        : props.theme.colors.nav.link
    }`,
    '&:hover': {
      color: `${
        props.active
          ? props.theme.colors.nav.linkActive
          : props.theme.colors.nav.linkHover
      }`,
      cursor: 'pointer'
    }
  })
);

const Navbar = ({ visibleSection }) => {
  const scrollToSection = id => {
    const section = document.getElementById(id);
    section.scrollIntoView(true);
  };

  const [navVisible, setNavVisible] = useState(false);

  return (
    <NavbarContainer>
      <Name>Colin de Vries</Name>
      <NavToggleButton onClick={() => setNavVisible(!navVisible)}>
        <FontAwesomeIcon icon={faBars} />
      </NavToggleButton>
      <Image src={image} />
      <NavLinks visible={navVisible}>
        <NavLink
          section_id='about'
          onClick={() => scrollToSection('about')}
          active={visibleSection === 'about'}
        >
          About
        </NavLink>
        <NavLink
          section_id='experience'
          onClick={() => scrollToSection('experience')}
          active={visibleSection === 'experience'}
        >
          Experience
        </NavLink>
        <NavLink
          section_id='education'
          onClick={() => scrollToSection('education')}
          active={visibleSection === 'education'}
        >
          Education
        </NavLink>
        <NavLink
          section_id='skills'
          onClick={() => scrollToSection('skills')}
          active={visibleSection === 'skills'}
        >
          Skills
        </NavLink>
        <NavLink
          section_id='interests'
          onClick={() => scrollToSection('interests')}
          active={visibleSection === 'interests'}
        >
          Interests
        </NavLink>
        <NavLink
          section_id='projects'
          onClick={() => scrollToSection('projects')}
          active={visibleSection === 'projects'}
        >
          Projects
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
