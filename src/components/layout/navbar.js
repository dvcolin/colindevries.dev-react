import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled('nav')(
  css({
    position: 'sticky',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    height: '5.6rem',
    px: 2,
    color: 'nav.text',
    bg: 'nav.background',
    width: '100%'
  })
);

const Name = styled('div')(
  css({
    fontSize: '2.2rem',
    fontWeight: 'bold'
  })
);

const NavToggleButton = styled('button')(
  css({
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
