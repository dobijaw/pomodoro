import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 8px 0;
  border: 0;
  margin: 0;
  background: none;
  color: ${({ theme }) => theme.colors.copy};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  letter-spacing: 0.12em;
  font-family: inherit;

  &[type='time'] {
    margin: 8px 0 0 -10px;
  }

  &[type='time']::-webkit-datetime-edit-fields-wrapper {
    display: flex;
  }

  &[type='time']::-webkit-datetime-edit-text {
    padding: 19px 4px;
  }

  &[type='time']::-webkit-datetime-edit-hour-field,
  &[type='time']::-webkit-datetime-edit-minute-field,
  &[type='time']::-webkit-datetime-edit-second-field {
    border-radius: 100px;
    padding: 20px 10px;

    &:focus {
      background: ${({ focusBackgorund, theme }) =>
        focusBackgorund ? theme.colors.background : theme.colors.background20};
    }
  }

  &[type='time']::-webkit-clear-button,
  &[type='time']::-webkit-inner-spin-button {
    display: none;
  }

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.background40};
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }
`;

export default Input;
