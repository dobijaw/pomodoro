import styled, { css } from 'styled-components';

const CycleItem = styled.span<{ fillDot?: boolean }>`
  position: relative;
  z-index: 1;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background40};
  transition: all 1s ease-in-out;

  @media (min-width: 960px) {
    width: 25px;
    height: 25px;
  }

  @media (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    z-index: 0;
    display: block;
    width: 20px;
    height: 1px;
    transition: all 1s ease-in-out;

    @media (min-width: 960px) {
      width: 25px;
    }

    @media (min-width: 1200px) {
      width: 30px;
    }
  }

  ${({ fillDot }) =>
    fillDot &&
    css`
      position: relative;
      background: ${({ theme }) => theme.colors.secondary};
      transition: all 1s ease-in-out;

      &::before {
        background: ${({ theme }) => theme.colors.secondary};
        transition: all 2s ease-in-out;
      }
    `}
`;

export default CycleItem;
