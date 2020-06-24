import styled, { css } from "styled-components";

const IconButton = styled.button<{
  asAdd?: boolean;
  asSubtract?: boolean;
  asClose?: boolean;
  asDelete?: boolean;
  withBorder?: boolean;
}>`
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  border: ${({ theme, withBorder }) =>
    withBorder ? `1px solid ${theme.colors.secondary}` : "none"};
  border-radius: 50%;
  background: transparent;
  transition: background 0.35s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.background20};

    &::before,
    &::after {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 14px;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary};
    transition: background 0.35s ease-in-out;
  }

  ${({ asAdd }) =>
    asAdd &&
    css`
      &::before {
        transform: translate(-50%, -50%) rotate(0);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    `}

    ${({ asSubtract }) =>
      asSubtract &&
      css`
        &::before {
          transform: translate(-50%, -50%) rotate(0);
        }

        &::after {
          opacity: 0;
          visibility: hidden;
        }
      `}

  ${({ asClose, asDelete }) =>
    (asClose || asDelete) &&
    css`
      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    `}
`;

export default IconButton;
