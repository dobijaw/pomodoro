import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

import Input from "components/atoms/Input/Input";
import Label from "components/atoms/Label/Label";

const StyledLabel = styled(Label)`
  width: 100%;
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
  margin-top: 12px;
`;

const StyledInput = styled(Input)`
  max-width: 60px;
  text-align: center;
`;

const InputBreak = styled.span`
  width: 20px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.copy};
  text-align: center;
`;

interface Props {
  label: string;
  onChange: (values: string[]) => void;
}

function TimeInputBox({ label, onChange }: Props) {
  const [maxValue] = useState<number>(60);
  const [values, setValues] = useState<string[]>(["00", "00"]);

  function handleMinutesChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.currentTarget.value);
    const currentValue = value < 0 ? 0 : value > maxValue ? maxValue : value;

    setValues((prevValue) => [
      currentValue < 10 ? `0${currentValue}` : `${currentValue}`,
      currentValue === maxValue ? "00" : prevValue[1],
    ]);
  }

  function handleSecondsChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.currentTarget.value);
    const minutes = Number(values[0]);
    const currentValue =
      value < 0 || value >= maxValue || minutes === 60 ? 0 : value;

    setValues((prevValue) => [
      prevValue[0],
      currentValue < 10 ? `0${currentValue}` : `${currentValue}`,
    ]);
  }

  return (
    <StyledLabel>
      {label}
      <BoxWrapper>
        <StyledInput
          asBox
          type="number"
          value={[values[0]]}
          name="minutes"
          onChange={handleMinutesChange}
        />
        <InputBreak>:</InputBreak>
        <StyledInput
          asBox
          type="number"
          value={[values[1]]}
          name="seconds"
          onChange={handleSecondsChange}
        />
      </BoxWrapper>
    </StyledLabel>
  );
}

export default TimeInputBox;
