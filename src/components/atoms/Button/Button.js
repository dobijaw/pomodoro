import styled, { css } from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 16px 32px;
  border: 1px solid ${({ theme }) => theme.colors.buttons};
  border-radius: 60px;
  margin: 10px 0;
  min-width: 220px;
  background: none;
  color: ${({ theme }) => theme.colors.buttons};
  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.08em;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.35s;
  cursor: pointer;

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
