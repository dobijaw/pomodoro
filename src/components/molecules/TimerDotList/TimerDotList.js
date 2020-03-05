import React from 'react';
import styled from 'styled-components';
import TimerDot from 'components/atoms/TimerDot/TimerDot';

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 40px 0;
`;

const StyledItem = styled.li`
  padding: 0;
  margin: 0 14px;
`;

const TimerDotList = () => (
  <StyledList>
    <StyledItem>
      <TimerDot fill />
    </StyledItem>
    <StyledItem>
      <TimerDot fill />
    </StyledItem>
    <StyledItem>
      <TimerDot fill />
    </StyledItem>
    <StyledItem>
      <TimerDot />
    </StyledItem>
  </StyledList>
);

export default TimerDotList;
