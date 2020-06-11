import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from 'context';

import Logo from 'components/atoms/Logo/Logo';
import Burger from 'components/atoms/Burger/Burger';
import NavList from 'components/molecules/NavList/NavList';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Navigation() {
  const { handleOpenModal } = useContext(AppContext);
  const [isMobileView, toggleMobileView] = useState<boolean>(true);
  const [isMenuVisible, toggleMenuVisibility] = useState<boolean>(true);

  const setMobile = () =>
    window.innerWidth < 960 ? toggleMobileView(true) : toggleMobileView(false);

  useEffect(() => {
    setMobile();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', setMobile);
    return () => window.removeEventListener('resize', setMobile);
  }, []);

  return (
    <header>
      <Nav>
        <Logo />
        {isMobileView && (
          <Burger
            isVisible={isMenuVisible}
            handleClick={toggleMenuVisibility}
          />
        )}
        {isMenuVisible && (
          <NavList
            asMobile={isMobileView}
            isVisible={isMenuVisible}
            onOpenModal={handleOpenModal}
          />
        )}
      </Nav>
    </header>
  );
}

export default Navigation;
