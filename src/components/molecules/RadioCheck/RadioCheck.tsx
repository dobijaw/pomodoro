import React from 'react';
import styled, { css } from 'styled-components';
import Label from 'components/atoms/Label/Label';

const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  cursor: pointer;
  transition: all 0.35s ease-in-out;
`;

const Checkmark = styled.span<{ type?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.35s ease-in-out;

  ${({ type }) =>
    type === 'radio' &&
    css`
      border-radius: 50%;
    `}
`;

const StyledLabel = styled(Label)`
  padding-left: 25px;
  margin: 18px 0;
  line-height: 14px;
  cursor: pointer;
  user-select: none;
  transition: all .35s ease-in-out;

  ${Input}:checked ~ ${Checkmark} {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    ${Checkmark} {
        background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

type RadioCheckProps = {
  label: string;
  type: 'radio' | 'checkbox';
  name: string;
  onChange: () => void;
  checked?: boolean;
  id: string;
};

const RadioCheck = ({
  id,
  label,
  type,
  name,
  onChange,
  checked,
}: RadioCheckProps) => (
  <StyledLabel>
    {label}
    <Input
      id={id}
      type={type}
      name={name}
      onChange={onChange}
      checked={checked}
    />
    <Checkmark type={type} />
  </StyledLabel>
);

export default RadioCheck;
