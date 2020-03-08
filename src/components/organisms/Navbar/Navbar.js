import React from 'react';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';
import Button from 'components/atoms/Button/Button';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  padding: 60px 0;
  margin: 0 auto;
`;

const StyledRightNav = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = ({ handleModalButtonClick }) => (
  <StyledNav>
    <Logo />
    <StyledRightNav>
      <NavList />
      <Button onClick={handleModalButtonClick}>Create Cycle</Button>
    </StyledRightNav>
  </StyledNav>
);

export default Navbar;
