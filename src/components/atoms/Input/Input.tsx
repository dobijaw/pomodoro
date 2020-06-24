import styled, { css } from 'styled-components';

const Input = styled.input<{ focusBackgorund?: boolean; asBox?: boolean }>`
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
  cursor: pointer;

  &:focus {
    outline: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

    &::placeholder {
      opacity: 0;
    }
  }

  ${({ asBox }) =>
    asBox &&
    css`
      padding: 10px;
      /* border: 1px solid ${({ theme }) => theme.colors.secondary}; */
      border: none;
      border-radius: 100px;
      background: ${({ theme }) => theme.colors.background};

      &:focus {
        border: none;
        background: ${({ theme }) => theme.colors.background40};
      }
    `}
  &[type="button"] {
    text-align: left;
  }

  &[type='number'] {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

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
    opacity: 1;
    color: ${({ theme }) => theme.colors.background60};
    font-weight: 300;
    transition: opacity 0.35s ease-in-out;
  }
`;

export default Input;
