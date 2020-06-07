import styled, { css } from 'styled-components';

const Label = styled.label<{
  asCopy?: boolean;
  asMedium?: boolean;
  asLarge?: boolean;
}>`
  padding: 0;
  margin: 0;
  color: ${({ theme, asCopy }) =>
    asCopy ? theme.colors.copy : theme.colors.secondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  ${({ asMedium }) =>
    asMedium &&
    css`
      font-size: 16px;
    `}

  ${({ asLarge }) =>
    asLarge &&
    css`
      font-size: 18px;
    `}
`;

export default Label;
