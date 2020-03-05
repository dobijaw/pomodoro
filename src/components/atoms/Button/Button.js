import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 16px 32px;
  border: 1px solid ${({ theme }) => theme.colors.buttons};
  border-radius: 60px;
  margin: 0;
  background: none;
  color: ${({ theme }) => theme.colors.buttons};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.35s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.buttons};
    color: ${({ theme }) => theme.colors.background};
  }

  &:focus {
    outline: 1;
    outline-color: ${({ theme }) => theme.colors.lines};
  }
`;

export default Button;
