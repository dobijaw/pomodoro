import styled, { css } from 'styled-components';

const Button = styled.button<{
  asPrimary?: boolean;
  asDelete?: boolean;
  withMargin?: boolean;
}>`
  display: inline-block;
  min-width: 220px;
  padding: 18px 32px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 60px;
  margin: ${({ withMargin }) => (withMargin ? '5px' : '5px 0')};
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  font-family: inherit;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.35s;

  @media (min-width: 960px) {
    margin: ${({ withMargin }) => (withMargin ? '10px' : '10px 0')};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.primary};
  }

  ${({ asPrimary }) =>
    asPrimary &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
    `}

  ${({ asDelete }) =>
    asDelete &&
    css`
      border-color: ${({ theme }) => theme.colors.error};
      color: ${({ theme }) => theme.colors.error};

      &:hover {
        background-color: ${({ theme }) => theme.colors.error};
        color: ${({ theme }) => theme.colors.copy};
      }
    `}
`;

export default Button;
