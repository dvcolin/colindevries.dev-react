import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled('nav')(
  css({
    position: ['sticky', null, null, 'fixed'],
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    height: ['5.6rem', null, null, '100vh'],
    width: ['100%', null, null, '27.2rem'],
    px: 2,
    color: 'nav.text',
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
    color: 'nav.text',
    fontSize: '2.2rem'
  })
);

const Navbar = () => {
  return (
    <NavbarContainer>
      <Name>Colin de Vries</Name>
      <NavToggleButton>
        <FontAwesomeIcon icon={faBars} />
      </NavToggleButton>
    </NavbarContainer>
  );
};

export default Navbar;
