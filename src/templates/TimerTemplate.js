import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Timer from 'components/atoms/Timer/Timer';
import NextTimer from 'components/molecules/NextTimer/NextTimer';
import Button from 'components/atoms/Button/Button';
import Select from 'components/organisms/Select/Select';

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledTimer = styled.div`
  padding: 40px 0 80px;
`;

const StyledBtnsContainer = styled.div`
  display: flex;
  justify-content: center;

  ${Button} {
    margin: 10px 25px;
  }
`;

const StyledPanel = styled.div`
  margin-top: 40px;

  ${StyledBtnsContainer} {
    margin-top: 40px;
  }
`;

const TimerTemplate = () => {
  const [timer, setTimer] = useState(25);
  const [isGoing, setIsGoing] = useState(false);
  const [initialButton, setInitialButton] = useState(true);

  const countdown = () => {
    if (!isGoing) return;

    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  };

  const handleClickStart = () => {
    setIsGoing(!isGoing);
    setInitialButton(false);
  };

  useEffect(() => {
    const clearHere = countdown();

    return clearHere;
  });

  return (
    <StyledWrapper>
      <StyledTimer>
        <NextTimer next="Next break" time="5:00" />
        <Timer active>{timer}</Timer>
      </StyledTimer>
      <StyledPanel>
        <Select />
        <StyledBtnsContainer>
          {/* <Button type="button" fillButton>
            continue
          </Button>
          <Button type="button" fillButton onClick={handleClickStart}>
            {!isGoing ? 'start' : 'stop'}
          </Button> */}
          {initialButton ? (
            <Button type="button" fillButton onClick={handleClickStart}>
              {!isGoing ? 'start' : 'stop'}
            </Button>
          ) : (
            <>
              <Button type="button" fillButton onClick={handleClickStart}>
                {!isGoing ? 'start' : 'pause'}
              </Button>
              <Button type="button" fillButton onClick={handleClickStart}>
                {!isGoing ? 'start' : 'end now'}
              </Button>
            </>
          )}
        </StyledBtnsContainer>
      </StyledPanel>
    </StyledWrapper>
  );
};

export default TimerTemplate;
