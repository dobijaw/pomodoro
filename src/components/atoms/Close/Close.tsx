import styled from 'styled-components';

const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: block;
  width: 28px;
  height: 28px;
  border: none;
  background: none;
  transition: background 0.35s ease-in-out;

  &:hover {
    &::before,
    &::after {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 14px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export default Close;
