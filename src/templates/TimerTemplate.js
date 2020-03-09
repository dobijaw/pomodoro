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
  const [timer, setTimer] = useState(
    defaultSessionTime.length <= 5 ? `${defaultSessionTime}:00` : defaultSessionTime,
  );
  // eslint-disable-next-line
  const [nextTimer, setNextTimer] = useState(
    defaultBreakTime.length <= 5 ? `${defaultBreakTime}:00` : defaultBreakTime,
  );
  const [isGoing, setIsGoing] = useState(false);
  const [initialButton, setInitialButton] = useState(true);

  const countdown = () => {
    if (!isGoing) return;

    const interval = setInterval(() => {
      let [hours, minutes, seconds] = timer.split(':');

      if (hours === '00' && minutes === '00' && seconds === '00')
        return () => clearInterval(interval);

      if (hours !== '00' && minutes === '00' && seconds === '00') {
        hours -= 1;
        seconds = 59;
        minutes = 59;

        hours = hours < 10 ? `0${hours}` : hours;

        setTimer(`${hours}:${minutes}:${seconds}`);
      } else if (seconds === '00') {
        seconds = 59;
        minutes -= 1;
        minutes = minutes < 10 ? `0${minutes}` : minutes;

        setTimer(`${hours}:${minutes}:${seconds}`);
      } else {
        seconds -= 1;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        setTimer(`${hours}:${minutes}:${seconds}`);
      }
    }, 100);

    return () => clearInterval(interval);
  };

  const handleClickStart = () => {
    setIsGoing(!isGoing);
    setInitialButton(false);
  };

  const handleClickStop = () => {
    setInitialButton(true);
    // console.log('save');
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
              {isGoing ? (
                <Button type="button" fillButton onClick={handleClickStart}>
                  pause
                </Button>
              ) : (
                <>
                  <Button type="button" fillButton onClick={handleClickStart}>
                    continue
                  </Button>
                  <Button type="button" fillButton onClick={handleClickStop}>
                    stop
                  </Button>
                </>
              )}
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
