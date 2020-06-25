import styled, { css } from 'styled-components';

const Arrow = styled.span<{ isActive: boolean }>`
  border: solid ${({ theme }) => theme.colors.secondary};
  border-width: 0 2px 2px 0;
  display: inline-block;
  transform: translate(-50%, -50%) rotate(45deg);
  padding: 3px;
  margin-left: 20px;
  transition: all 0.35s;
  transform-origin: center center;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(225deg);
    `}
`;

export default Arrow;
