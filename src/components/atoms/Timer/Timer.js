import styled, { css } from 'styled-components';

const Timer = styled.span`
  display: block;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.details};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  line-height: 1;

  @media (min-width: 960px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.buttons};
      font-size: ${({ theme }) => theme.fontSizes.xxl};
      font-weight: ${({ theme }) => theme.fontWeights.bold};

      @media (min-width: 960px) {
        font-size: ${({ theme }) => theme.fontSizes.xxxl};
        font-weight: ${({ theme }) => theme.fontWeights.regular};
      }
    `}
`;

export default Timer;
