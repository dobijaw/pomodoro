import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { getSeconds, getMinutes } from 'utils';

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
  maxValue: number;
  value: number;
}

function TimeInputBox({ label, onChange, maxValue, value }: Props) {
  function convertToMilliseconds(valuesData: number[]): number {
    const [minutes, seconds] = valuesData;

    const minutesInMiliseconds = minutes * 60 * 1000;
    const secondsInMiliseconds = seconds * 1000;

    return minutesInMiliseconds + secondsInMiliseconds;
  }

  function handleMinutesChange(e: ChangeEvent<HTMLInputElement>) {
    const eValue = Number(e.currentTarget.value);

    const min = eValue < 0 ? 0 : eValue > maxValue ? maxValue : eValue;
    const sec = Number(min === maxValue ? 0 : getSeconds(value, true));

    onChange(convertToMilliseconds([min, sec]));
  }

  function handleSecondsChange(e: ChangeEvent<HTMLInputElement>) {
    const eValue = Number(e.currentTarget.value);

    const min = Number(getMinutes(value, true));
    const sec = eValue < 0 || eValue >= maxValue || min >= 60 ? 0 : eValue;

    onChange(convertToMilliseconds([min, sec]));
  }

  return (
    <StyledLabel>
      {label}
      <BoxWrapper>
        <StyledInput
          asBox
          type="number"
          value={getMinutes(value)}
          name="minutes"
          onChange={handleMinutesChange}
        />
        <InputBreak>:</InputBreak>
        <StyledInput
          asBox
          type="number"
          value={getSeconds(value)}
          name="seconds"
          onChange={handleSecondsChange}
        />
      </BoxWrapper>
    </StyledLabel>
  );
}

export default TimeInputBox;
