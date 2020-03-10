import styled, { css } from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 18px 32px;
  border: 1px solid ${({ theme }) => theme.colors.buttons};
  border-radius: 60px;
  margin: 10px 0;
  width: 100%;
  min-width: 220px;
  background: none;
  color: ${({ theme }) => theme.colors.buttons};
  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  letter-spacing: 0.08em;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.35s;
  cursor: pointer;

  @media (min-width: 420px) {
    width: auto;
    padding: 18px 42px;
  }

  @media (min-width: 960px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.buttons};
    color: ${({ theme }) => theme.colors.background};
  }

  ${({ fillButton }) =>
    fillButton &&
    css`
      background: ${({ theme }) => theme.colors.buttons};
      color: ${({ theme }) => theme.colors.background};

      &:hover {
        background: none;
        color: ${({ theme }) => theme.colors.buttons};
      }
    `}
`;

export default Button;
