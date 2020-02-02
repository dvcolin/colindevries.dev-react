import styled, { css } from 'styled-components';

const heading = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  font-weight: 700;
`;

export const H1 = styled.h1`
  ${heading};
  font-size: 9.6rem;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 0.9;
`;

export const H4 = styled.h4`
  ${heading};
  font-size: 2.4rem;
`;
