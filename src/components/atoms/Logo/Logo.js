import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes/index';

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
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.l};
  letter-spacing: -0.06em;
  line-height: 1;

  @media (min-width: 960px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Logo = () => (
  <StyledLink to={routes.timer}>
    <StyledLogo>pomodoro</StyledLogo>
  </StyledLink>
);

export default Logo;
