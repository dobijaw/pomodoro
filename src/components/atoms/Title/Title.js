import styled, { css } from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.importantText};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  text-align: center;

  ${({ onlyScreenreader }) =>
    onlyScreenreader &&
    css`
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      height: 1px;
      width: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
    `}
`;

export default Title;
