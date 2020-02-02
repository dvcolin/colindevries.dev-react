import styled from 'styled-components';
import css from '@styled-system/css';

const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 700
};

export const H1 = styled('h1')(
  css({
    ...heading,
    fontSize: '9.6rem',
    color: 'secondary',
    lineHeight: 0.9,
    textTransform: 'uppercase'
  })
);

export const H2 = styled('h2')(
  css({
    ...heading,
    fontSize: '5.6rem',
    color: 'secondary',
    textTransform: 'uppercase'
  })
);

export const H4 = styled('h4')(
  css({
    ...heading,
    fontSize: '2.4rem'
  })
);
