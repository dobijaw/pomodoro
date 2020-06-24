import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';

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
  onChange: (values: number) => void;
}

function TimeInputBox({ label, onChange }: Props) {
  const [maxValue] = useState<number>(60);
  const [values, setValues] = useState<string[]>(['00', '00']);

  function convertToMilliseconds(valuesData: string[]) {
    const [minutes, seconds] = valuesData;

    const minutesInMiliseconds = Number(minutes) * 60 * 1000;
    const secondsInMiliseconds = Number(seconds) * 1000;

    return minutesInMiliseconds + secondsInMiliseconds;
  }

  function handleMinutesChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.currentTarget.value);
    const currentValue = value < 0 ? 0 : value > maxValue ? maxValue : value;

    const min = currentValue < 10 ? `0${currentValue}` : `${currentValue}`;
    const sec = currentValue === maxValue ? '00' : values[1];

    setValues([min, sec]);
    onChange(convertToMilliseconds([min, sec]));
  }

  function handleSecondsChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.currentTarget.value);
    const minutes = Number(values[0]);
    const currentValue =
      value < 0 || value >= maxValue || minutes === 60 ? 0 : value;

    const min = values[0];
    const sec = currentValue < 10 ? `0${currentValue}` : `${currentValue}`;

    setValues((prevValue) => [min, sec]);
    onChange(convertToMilliseconds([min, sec]));
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
