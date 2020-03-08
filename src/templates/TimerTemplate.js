import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Timer from 'components/atoms/Timer/Timer';
import NextTimer from 'components/molecules/NextTimer/NextTimer';
import Button from 'components/atoms/Button/Button';
import Select from 'components/organisms/Select/Select';
import { connect } from 'react-redux';

const StyledWrapper = styled.div``;

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
  max-width: 500px;
  margin: 40px auto 0;

  ${StyledBtnsContainer} {
    margin-top: 40px;
  }
`;

const TimerTemplate = ({ defaultSessionTime, defaultBreakTime }) => {
  const [timer, setTimer] = useState(defaultSessionTime);
  // eslint-disable-next-line
  const [nextTimer, setNextTimer] = useState(defaultBreakTime);
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
        <NextTimer next="Next break" time={nextTimer} />
        <Timer active>{timer}</Timer>
      </StyledTimer>
      <StyledPanel>
        <Select />
        <StyledBtnsContainer>
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

const mapStateToProps = state => ({
  defaultSessionTime: state.defaultSessionTime,
  defaultBreakTime: state.defaultBreakTime,
});

export default connect(mapStateToProps)(TimerTemplate);
