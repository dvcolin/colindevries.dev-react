import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import theme from '../../styles/theme';
import Navbar from './navbar';

const LayoutContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutContainer>
        <Navbar />
        <main>{children}</main>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
