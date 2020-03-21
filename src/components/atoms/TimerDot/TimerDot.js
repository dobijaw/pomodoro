import styled, { css } from 'styled-components';

const TimerDot = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background40};

  ${({ fillDot }) =>
    fillDot &&
    css`
      position: relative;
      background: ${({ theme }) => theme.colors.secondary};

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 100%;
        z-index: 0;
        display: block;
        width: 30px;
        height: 1px;
        background: ${({ theme }) => theme.colors.secondary};
      }
    `}
`;

export default TimerDot;
