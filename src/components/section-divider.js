import styled from 'styled-components';
import css from '@styled-system/css';

export default styled('hr')(
  css({
    width: '100%',
    border: 'none',
    borderTopWidth: '1px',
    height: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'muted'
  })
);
