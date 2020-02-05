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
    fontSize: '2.2rem'
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
    display: ['none', null, null, 'flex'],
    flexDirection: 'column',
    alignItems: 'center',
    mt: 2
  })
);

const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes[0]};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.08rem;
  padding: ${({ theme }) => theme.space[1]};
  color: ${props =>
    props.active
      ? ({ theme }) => theme.colors.nav.linkActive
      : ({ theme }) => theme.colors.nav.link};
  transition: all 75ms ease-out;
  &:hover {
    color: ${props =>
      props.active
        ? ({ theme }) => theme.colors.nav.linkActive
        : ({ theme }) => theme.colors.nav.linkHover};
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('about');

  const scrollToSection = id => {
    setActiveLink(id);
    const section = document.getElementById(id);
    section.scrollIntoView(true);
  };
  return (
    <NavbarContainer>
      <Name>Colin de Vries</Name>
      <NavToggleButton>
        <FontAwesomeIcon icon={faBars} />
      </NavToggleButton>
      <Image src={image} />
      <NavLinks>
        <NavLink
          section_id='about'
          onClick={() => scrollToSection('about')}
          active={activeLink === 'about'}
        >
          About
        </NavLink>
        <NavLink
          section_id='experience'
          onClick={() => scrollToSection('experience')}
          active={activeLink === 'experience'}
        >
          Experience
        </NavLink>
        <NavLink
          section_id='education'
          onClick={() => scrollToSection('education')}
          active={activeLink === 'education'}
        >
          Education
        </NavLink>
        <NavLink
          section_id='skills'
          onClick={() => scrollToSection('skills')}
          active={activeLink === 'skills'}
        >
          Skills
        </NavLink>
        <NavLink
          section_id='interests'
          onClick={() => scrollToSection('interests')}
          active={activeLink === 'interests'}
        >
          Interests
        </NavLink>
        <NavLink
          section_id='projects'
          onClick={() => scrollToSection('projects')}
          active={activeLink === 'projects'}
        >
          Projects
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
