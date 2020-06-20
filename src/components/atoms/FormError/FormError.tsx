import styled, { css } from 'styled-components';

const FormError = styled.span<{ asCommunicat?: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  display: block;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.error};
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: none;

  @media (min-width: 960px) {
    font-size: 14px;
  }

  ${({ asCommunicat }) =>
    asCommunicat &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `}
`;

export default FormError;
