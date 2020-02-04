import styled from 'styled-components';
import css from '@styled-system/css';

export default styled('div')(
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: [null, 'center'],
    py: [4, null, null, 3],
    px: [2, null, null, 3],
    maxWidth: '120rem',
    minHeight: '100vh'
  })
);
