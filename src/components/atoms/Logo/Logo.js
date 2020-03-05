import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes/index';

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 4px 10px 10px 10px;
  margin: 0 0 0 -10px;
  text-decoration: none;
`;

const StyledLogo = styled.span`
  display: block;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  letter-spacing: -0.06em;
  line-height: 1;
`;

const Logo = () => (
  <StyledLink to={routes.timer}>
    <StyledLogo>pomodoro</StyledLogo>
  </StyledLink>
);

export default Logo;
