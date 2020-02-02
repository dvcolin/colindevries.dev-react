import styled from 'styled-components';
import css from '@styled-system/css';

const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading'
};

export const H1 = styled('h1')(
  css({
    ...heading,
    fontSize: 5,
    color: 'secondary'
  })
);

export const H2 = styled('h2')(
  css({
    ...heading,
    fontSize: 4,
    color: 'secondary',
    textTransform: 'uppercase'
  })
);

export const H4 = styled('h4')(
  css({
    ...heading,
    fontSize: 2
  })
);
