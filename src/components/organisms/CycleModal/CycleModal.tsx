import React, { useState, FormEvent } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { useClickOutside } from 'hooks/useClickOutside';
import { SessionEnum, Session } from 'store/cycle/types';
import { addToCycle, clearAndAddToCycle } from 'store/cycle/actions';
import { generateUnicId } from 'utils';

import Close from 'components/atoms/Close/Close';
import Button from 'components/atoms/Button/Button';
import Headline from 'components/atoms/Headline/Headline';
import IconButton from 'components/atoms/IconButton/IconButton';

import RadioCheck from 'components/molecules/RadioCheck/RadioCheck';
import NumberInputBox from 'components/molecules/NumberInputBox/NumberInputBox';
import TimeInputBox from 'components/molecules/TimeInputBox/TimeInputBox';

const scale = keyframes`
  from {
    transform: translate(-50%, -50%) scale(0);
  }

  to {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
`;

const BoxModal = styled.div`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  overflow-y: scroll;
  width: calc(100% - 40px);
  max-width: 800px;
  height: calc(100vh - 40px);
  max-height: 600px;

  transform: translate(-50%, -50%) scale(0);
  background: ${({ theme }) => theme.colors.background20};
  box-shadow: 5px 2px 10px 0px rgba(24, 27, 30, 0.3);
  animation: ${scale} 0.4s forwards;
`;

const BoxModalWrapper = styled.div`
  padding: 10px 30px;

  @media (min-width: 600px) {
    padding: 20px 50px;
  }

  @media (min-width: 840px) {
    padding: 30px 70px;
  }
`;

const RadioForm = styled.form`
  display: block;
  margin-top: 20px;

  @media (min-width: 600px) {
    display: flex;

    > label {
      &:not(:last-of-type) {
        margin-right: 20px;
      }
    }
  }
`;

const TimerWrapper = styled.div`
  > label {
    margin: 30px 0;
  }

  @media (min-width: 960px) {
    display: flex;

    > label {
      &:first-child {
        margin-right: 20px;
      }

      &:last-child {
        margin-left: 20px;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 30px auto;

  @media (min-width: 960px) {
    margin: 60px 0 0 auto;
  }
`;

const Form = styled.form`
  margin-top: 60px;
`;

const SesionNumber = styled.span`
  display: block;
  width: 100px;
  font-size: 40px;
  line-height: 1;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
`;

interface State {
  cycle: {
    customCycle: Session[];
  };
}

interface CycleModal {
  onClose: () => void;
}

interface SameValue {
  sessionNumber: number;
  sessionTime: number;
  restTime: number;
}

const sameData = {
  sessionNumber: 0,
  sessionTime: 0,
  restTime: 0,
};

interface CustomValue {
  id: string;
  sessionTime: number;
  restTime: number;
}

const customData = {
  id: generateUnicId([]),
  sessionTime: 0,
  restTime: 0,
};

function CycleModal({ onClose }: CycleModal) {
  const customCycle = useSelector(({ cycle }: State) => cycle.customCycle);
  const dispatch = useDispatch();

  const [isClearChecked, toggleClearChecked] = useState<boolean>(false);
  const [isSameSession, toggleSession] = useState<boolean>(true);
  const [sameValues, setSameValues] = useState<SameValue>(sameData);
  const [customValues, setCustomValues] = useState<CustomValue[]>([customData]);

  const modalRef = useClickOutside(onClose);

  const getSameValue = (state: SameValue, value: number, name: string) => ({
    ...state,
    [name]: value,
  });

  const getCustomValue = (
    state: CustomValue[],
    value: number,
    id: string,
    type: string
  ) => state.map((i) => (i.id === id ? { ...i, [type]: value } : i));

  function addNewCustomSession() {
    if (customValues.length < 5) {
      const unicId = generateUnicId(customValues.map((el) => el.id));

      setCustomValues([
        ...customValues,
        {
          id: String(unicId),
          sessionTime: 0,
          restTime: 0,
        },
      ]);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let output: Session[] | [] = [];

    if (isSameSession) {
      if (
        sameValues.sessionNumber <= 0 ||
        sameValues.sessionTime <= 0 ||
        sameValues.restTime <= 0
      )
        return;

      output = Array(sameValues.sessionNumber).fill([
        { type: SessionEnum.ACTION, time: sameValues.sessionTime },
        { type: SessionEnum.REST, time: sameValues.restTime },
      ]);
    } else {
      if (customValues.some((i) => i.sessionTime === 0 || i.restTime === 0))
        return;

      output = customValues.map((item) => [
        { type: SessionEnum.ACTION, time: item.sessionTime },
        { type: SessionEnum.REST, time: item.restTime },
      ]);
    }

    if (isClearChecked) {
      dispatch(clearAndAddToCycle(output));
    } else {
      dispatch(addToCycle(output));
    }

    setSameValues(sameData);
    onClose();
  }

  return (
    <Wrapper>
      <BoxModal ref={modalRef}>
        <Close onClick={onClose} />
        <BoxModalWrapper>
          <Headline>Create Cycle</Headline>
          <RadioForm>
            <RadioCheck
              label="Same session"
              id="sameSession"
              type="radio"
              name="sessionKind"
              checked={isSameSession}
              onChange={() => toggleSession(!isSameSession)}
            />
            <RadioCheck
              label="Custom session"
              id="customSession"
              type="radio"
              name="sessionKind"
              checked={!isSameSession}
              onChange={() => toggleSession(!isSameSession)}
            />
          </RadioForm>

          <Form onSubmit={handleSubmit}>
            {isSameSession ? (
              <>
                <NumberInputBox
                  label="session number"
                  onChange={(value: number) =>
                    setSameValues(
                      getSameValue(sameValues, value, 'sessionNumber')
                    )
                  }
                  maxValue={5}
                  value={String(sameValues.sessionNumber)}
                />
                <TimerWrapper>
                  <TimeInputBox
                    label="session time"
                    onChange={(value: number) =>
                      setSameValues(
                        getSameValue(sameValues, value, 'sessionTime')
                      )
                    }
                    maxValue={60}
                    value={sameValues.sessionTime}
                  />
                  <TimeInputBox
                    label="rest time"
                    onChange={(value: number) =>
                      setSameValues(getSameValue(sameValues, value, 'restTime'))
                    }
                    maxValue={60}
                    value={sameValues.restTime}
                  />
                </TimerWrapper>
              </>
            ) : (
              <>
                {customValues.map((item, index) => (
                  <TimerWrapper key={item.id}>
                    <SesionNumber>{index + 1}</SesionNumber>
                    <TimeInputBox
                      label="session time"
                      onChange={(value: number) =>
                        setCustomValues(
                          getCustomValue(
                            customValues,
                            value,
                            item.id,
                            'sessionTime'
                          )
                        )
                      }
                      maxValue={60}
                      value={Number(
                        customValues.find((el) => el.id === item.id)
                          ?.sessionTime
                      )}
                    />
                    <TimeInputBox
                      label="break time"
                      onChange={(value: number) =>
                        setCustomValues(
                          getCustomValue(
                            customValues,
                            value,
                            item.id,
                            'restTime'
                          )
                        )
                      }
                      maxValue={60}
                      value={Number(
                        customValues.find((el) => el.id === item.id)?.restTime
                      )}
                    />
                    {/* <IconButton
                    type="button"
                    asDelete
                    onClick={() => {
                      setCustomValues(
                        customValues.filter((s) => s.id !== item.id)
                      );
                    }}
                  /> */}
                  </TimerWrapper>
                ))}
                <IconButton
                  type="button"
                  asAdd
                  onClick={addNewCustomSession}
                  disabled={customValues.length >= 5}
                />
              </>
            )}

            {!!customCycle.length && (
              <RadioCheck
                label="Clear existing custom cycle"
                type="checkbox"
                name="clearCycle"
                onChange={() => toggleClearChecked(!isClearChecked)}
                id="string"
                checked={isClearChecked}
                marginTop="40px"
              />
            )}

            <StyledButton type="submit">Create Cycle</StyledButton>
          </Form>
        </BoxModalWrapper>
      </BoxModal>
    </Wrapper>
  );
}

export default CycleModal;
