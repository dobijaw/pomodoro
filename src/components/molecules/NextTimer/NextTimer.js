import React from 'react';
import styled from 'styled-components';
import Timer from 'components/atoms/Timer/Timer';

const StyledWrapper = styled.div`
  text-align: center;
`;

const Description = styled.span`
  display: block;
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  line-height: 1;
  color: ${({ theme }) => theme.colors.details};
  text-transform: uppercase;
`;

const NextTimer = ({ next, time }) => (
  <StyledWrapper>
    <Description>{next}</Description>
    <Timer>{time}</Timer>
  </StyledWrapper>
);

export default NextTimer;
