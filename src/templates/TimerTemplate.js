import React, { useState } from 'react';
import styled from 'styled-components';
import Timer from 'components/atoms/Timer/Timer';
import NextTimer from 'components/molecules/NextTimer/NextTimer';
import Button from 'components/atoms/Button/Button';
import Select from 'components/organisms/Select/Select';
import { connect } from 'react-redux';
import { changeTimerStatus } from 'actions';

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

const TimerTemplate = ({ counter, changeTimerStatus, isGoing }) => {
  const [initialButton, setInitialButton] = useState(true);

  const handleClickStart = () => {
    changeTimerStatus(!isGoing);
  };

  const handleClickStop = () => {
    setInitialButton(true);
  };

  return (
    <StyledWrapper>
      <StyledTimer>
        <NextTimer next="Next break" time="00:05:00" />
        <Timer active>{counter}</Timer>
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
  defaultBreakTime: state.defaultBreakTime,
  counter: state.counter,
  isGoing: state.isGoing,
});

const mapDispatchToProps = dispatch => {
  return {
    changeTimerStatus: isGoing => dispatch(changeTimerStatus(isGoing)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerTemplate);
