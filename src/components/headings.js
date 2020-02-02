import styled, { css } from 'styled-components';

const heading = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
`;

export const H1 = styled.h1`
  ${heading};
  font-size: 8.8rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const H3 = styled.h3`
  ${heading};
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.secondary};
`;
