import styled, { css } from 'styled-components';

const Label = styled.label<{
  asCopy?: boolean;
  asMedium?: boolean;
  asLarge?: boolean;
}>`
  position: relative;
  display: block;
  padding: 0;
  margin: 7px 0;
  color: ${({ theme, asCopy }) =>
    asCopy ? theme.colors.copy : theme.colors.secondary};
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  @media (min-width: 420px) {
    margin: 18px 0;
    font-size: 14px;
  }

  ${({ asMedium }) =>
    asMedium &&
    css`
      font-size: 14px;

      @media (min-width: 960px) {
        font-size: 16px;
      }
    `}

  ${({ asLarge }) =>
    asLarge &&
    css`
      font-size: 18px;
    `}
`;

export default Label;
