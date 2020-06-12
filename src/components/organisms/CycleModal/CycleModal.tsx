import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import Headline from 'components/atoms/Headline/Headline';
import Close from 'components/atoms/Close/Close';
import RadioCheck from 'components/molecules/RadioCheck/RadioCheck';
import Label from 'components/atoms/Label/Label';
import Input from 'components/atoms/Input/Input';

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
  z-index: 10;
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
  padding: 30px;
  transform: translate(-50%, -50%) scale(0);
  background: ${({ theme }) => theme.colors.background20};
  box-shadow: 5px 2px 10px 0px rgba(24, 27, 30, 0.3);
  animation: ${scale} 0.4s forwards;

  @media (min-width: 600px) {
    padding: 50px;
  }

  @media (min-width: 840px) {
    padding: 70px;
  }
`;

const RadioForm = styled.form`
  display: block;

  @media (min-width: 600px) {
    display: flex;

    > label {
      &:not(:last-of-type) {
        margin-right: 20px;
      }
    }
  }
`;

type CycleModal = {
  onClose: () => void;
};

function CycleModal({ onClose }: CycleModal) {
  const [isSameSession, toggleSession] = useState<boolean>(true);
  const boxModalRef = useRef(null);

  function closeClickingOutside(event: MouseEvent) {
    if (!(boxModalRef.current! as any).contains(event.target)) onClose();
  }

  const closeClickingOutsideCallback = useCallback(closeClickingOutside, []);

  useEffect(() => {
    document.addEventListener('click', closeClickingOutsideCallback);

    return () =>
      document.removeEventListener('click', closeClickingOutsideCallback);
  }, [closeClickingOutsideCallback]);

  return (
    <Wrapper>
      <BoxModal ref={boxModalRef}>
        <Close onClick={onClose} />
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
        <div>
          {isSameSession ? (
            <form>
              <div>
                <Label>
                  Session count
                  <Input type="number" />
                </Label>
                <Label>
                  Session time
                  <Input type="time" />
                </Label>
                <Label>
                  Session break
                  <Input type="time" />
                </Label>
              </div>
            </form>
          ) : (
            <h2 style={{ color: 'white' }}>Custom Session</h2>
          )}
        </div>
      </BoxModal>
    </Wrapper>
  );
}

export default CycleModal;
