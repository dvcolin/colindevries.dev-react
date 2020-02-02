import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  color: white;
  padding: 0.8rem 1.6rem;
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

const Name = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  font-weight: 600;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Name>Colin de Vries</Name>
    </NavbarContainer>
  );
};

export default Navbar;
