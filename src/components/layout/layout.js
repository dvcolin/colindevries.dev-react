import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import css from '@styled-system/css';
import GlobalStyles from '../../styles/global';
import theme from '../../styles/theme';
import Navbar from './navbar';

const Main = styled('main')(
  css({
    pl: [0, null, null, '27.2rem']
  })
);

const Layout = ({ visibleSection, setVisibleSection, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar
        visibleSection={visibleSection}
        setVisibleSection={setVisibleSection}
      />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
