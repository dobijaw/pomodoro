import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

import Label from "components/atoms/Label/Label";
import Input from "components/atoms/Input/Input";
import IconButton from "components/atoms/IconButton/IconButton";

const StyledLabel = styled(Label)`
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  transition: all 0.35s ease-in-out;

  &:focus-within {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

const StyledIconButton = styled(IconButton)`
  flex-shrink: 0;
`;

const StyledInput = styled(Input)`
  margin: 0 40px;
  text-align: center;
`;

interface Props {
  label: string;
  onChange: (value: string) => void;
}

function NumberInputBox({ label, onChange }: Props) {
  const [maxValue] = useState<number>(25);
  const [firstInputValue, setFirstInputValue] = useState<string>("0");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.currentTarget.value);
    const currentValue = value < 0 ? 0 : value > maxValue ? maxValue : value;

    setFirstInputValue(String(currentValue));
    onChange(String(currentValue));
  }

  function onIncrease() {
    const prevValue = Number(firstInputValue);
    const currentValue = prevValue + 1 > maxValue ? maxValue : prevValue + 1;

    setFirstInputValue(String(currentValue));
    onChange(String(currentValue));
  }

  function onDecrease() {
    const prevValue = Number(firstInputValue);
    const currentValue = prevValue - 1 < 0 ? 0 : prevValue - 1;

    setFirstInputValue(String(currentValue));
    onChange(String(currentValue));
  }

  return (
    <StyledLabel>
      {label}
      <BoxWrapper>
        <StyledIconButton
          type="button"
          asSubtract
          withBorder
          onClick={onDecrease}
        />
        <StyledInput
          asBox
          type="number"
          value={firstInputValue}
          onChange={handleChange}
        />
        <StyledIconButton type="button" asAdd withBorder onClick={onIncrease} />
      </BoxWrapper>
    </StyledLabel>
  );
}

export default NumberInputBox;
