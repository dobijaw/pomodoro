import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 0;
  border: 0;
  margin: 8px 0;
  background: none;
  color: ${({ theme }) => theme.colors.importantText};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 0.12em;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: ${({ theme }) => theme.fontWeights.xLight};
  }
`;

export default Input;
