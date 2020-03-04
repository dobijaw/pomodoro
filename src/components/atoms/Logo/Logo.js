import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  letter-spacing: -0.06em;
`;

const Logotype = styled.span`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  letter-spacing: -0.06em;
`;

const Logo = ({ index }) => <>{index ? <Title>pomodoro</Title> : <Logotype>pomodoro</Logotype>}</>;

export default Logo;
