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
    color: 'white',
    bg: 'primary',
    width: '100%'
  })
);

const Name = styled('div')(
  css({
    fontSize: 2,
    fontWeight: 'medium'
  })
);

const NavToggleButton = styled('button')(
  css({
    ml: 'auto',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: 2
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
