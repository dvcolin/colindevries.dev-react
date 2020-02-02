import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 5.6rem;
  padding: 0 1.6rem;
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

const Name = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 2rem;
  font-weight: 600;
`;

const NavToggleButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  color: white;
  font-size: 2.2rem;
`;

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
