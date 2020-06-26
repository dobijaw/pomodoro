import React, { useState, useContext, useEffect } from 'react';
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
  const [isMenuVisible, toggleMenuVisibility] = useState<boolean>(false);

  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuVisible]);

  useEffect(() => {
    if (isMenuVisible) window.scrollTo(0, 0);
  }, [isMenuVisible]);

  const handleBurgerClick = () => {
    toggleMenuVisibility((prevState) => !prevState);
  };

  return (
    <header>
      <Nav>
        <Logo />
        <Burger handleClick={handleBurgerClick} isVisible={isMenuVisible} />
        <NavList
          onOpenModal={handleOpenModal}
          handleClick={handleBurgerClick}
          isVisible={isMenuVisible}
        />
      </Nav>
    </header>
  );
}

export default Navigation;
