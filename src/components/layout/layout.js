import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import theme from '../../styles/theme';
import Navbar from './navbar';

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
    </ThemeProvider>
  );
};

export default Layout;
