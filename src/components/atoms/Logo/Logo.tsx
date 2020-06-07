import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Routes } from 'routes';

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 2px 10px 8px 10px;
  margin: 0 0 0 -10px;
  text-decoration: none;

  @media (min-widh: 960px) {
    padding: 4px 10px 10px 10px;
    margin: 0 0 0 -10px;
  }
`;

const StyledLogo = styled.span`
  display: block;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 26px;
  letter-spacing: -0.06em;
  line-height: 1;

  @media (min-width: 960px) {
    font-size: 30px;
  }
`;

const Logo = () => (
  <StyledLink to={Routes.timer}>
    <StyledLogo>pomodoro</StyledLogo>
  </StyledLink>
);

export default Logo;
