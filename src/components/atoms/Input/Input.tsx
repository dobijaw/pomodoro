import styled from 'styled-components';

const Input = styled.input<{ focusBackgorund?: boolean }>`
  width: 100%;
  padding: 20px 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.copy};
  background: none;
  font-family: 'Exo 2', sans-serif;
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
  transition: all 0.35s ease-in-out;

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

  &::placeholder {
    color: ${({ theme }) => theme.colors.copy};
  }

  &:focus {
    outline: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export default Input;