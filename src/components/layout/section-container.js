import styled from 'styled-components';
import css from '@styled-system/css';

export default styled('div')(
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: [null, 'center'],
    py: 4,
    px: 2,
    minHeight: '100vh'
  })
);
