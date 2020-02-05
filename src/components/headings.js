import styled from 'styled-components';
import css from '@styled-system/css';

const heading = {
  fontFamily: 'heading',
  fontWeight: 700,
  textTransform: 'uppercase'
};

export const H1 = styled('h1')(
  css({
    ...heading,
    fontSize: '9.2rem',
    lineHeight: 0.9,
    color: 'secondary'
  })
);

export const H2 = styled('h2')(
  css({
    ...heading,
    fontSize: '5.6rem',
    lineHeight: 1.2,
    color: 'secondary',
    mb: 3
  })
);

export const H3 = styled('h3')(
  css({
    ...heading,
    fontSize: '3.2rem',
    lineHeight: 1.2,
    color: 'secondary'
  })
);

export const H4 = styled('h4')(
  css({
    ...heading,
    fontSize: ['2rem', null, null, '2.4rem'],
    fontWeight: 600,
    lineHeight: 1.5,
    color: 'text',
    mb: 2
  })
);
