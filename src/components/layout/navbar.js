import React from 'react';
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
    bg: 'nav.background'
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

const Image = styled('div')(
  css({
    display: ['none', null, null, 'block'],
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '50%',
    height: '16rem',
    width: '16rem',
    borderWidth: '0.8rem',
    borderStyle: 'solid',
    borderColor: 'primary'
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

const NavLink = styled('a')(
  css({
    fontSize: 0,
    color: 'nav.link',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 800,
    letterSpacing: '0.08rem',
    py: 1,
    '&:hover': {
      color: 'nav.linkHover'
    },
    '&:active': {
      color: 'nav.linkActive'
    }
  })
);

const Navbar = () => {
  return (
    <NavbarContainer>
      <Name>Colin de Vries</Name>
      <NavToggleButton>
        <FontAwesomeIcon icon={faBars} />
      </NavToggleButton>
      <Image />
      <NavLinks>
        <NavLink href='#about'>About</NavLink>
        <NavLink href='#experience'>Experience</NavLink>
        <NavLink href='#education'>Education</NavLink>
        <NavLink href='#skills'>Skills</NavLink>
        <NavLink href='#interests'>Interests</NavLink>
        <NavLink href='#projects'>Projects</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
