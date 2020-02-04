import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import theme from '../../styles/theme';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
