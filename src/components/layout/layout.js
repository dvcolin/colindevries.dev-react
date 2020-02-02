import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import theme from '../../styles/theme';
import Navbar from './navbar';

const Main = styled.main`
  padding: 0 1.6rem;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
