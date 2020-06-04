import styled, { css } from 'styled-components';

const Button = styled.button<{ asPrimary?: boolean; asSecondary?: boolean }>`
  display: inline-block;
  min-width: 220px;
  padding: 18px 32px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 60px;
  margin: 10px 0;
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

  ${({ asPrimary }) =>
    asPrimary &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.copy};
    `}
`;

export default Button;
