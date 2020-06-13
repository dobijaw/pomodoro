import styled, { css } from 'styled-components';

const PageTitle = styled.h1<{ screenreaderOnly?: boolean }>`
  color: ${({ theme }) => theme.colors.copy};
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0.1em;

  ${({ screenreaderOnly }) =>
    screenreaderOnly &&
    css`
      position: absolute;
      overflow: hidden;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
    `}
`;

export default PageTitle;
