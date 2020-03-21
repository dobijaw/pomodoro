import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';
import Button from 'components/atoms/Button/Button';
import Burger from 'components/atoms/Burger/Burger';
import { toggleModal } from 'actions';
import { connect } from 'react-redux';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  padding: 10px 20px;

  @media (min-width: 960px) {
    padding: 60px 0;
    margin: 0 auto;
  }

  ${({ isFixed }) =>
    isFixed &&
    css`
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    `}
`;

const StyledRightNav = styled.div`
  display: flex;
  align-items: center;
`;

const StyledModalNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  padding: 80px 40px;
  background: ${({ theme }) => theme.colors.background20};
  transform: translateX(100%);
  transition: all 0.35s;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateX(0);
    `};
`;

const Navbar = ({ toggleModal, isModalOpen }) => {
  const [isMobile, checkIsMobile] = useState(window.innerWidth < 960);
  const [isActive, toggleIsActive] = useState(false);
  const [isFixed, toggleIsFixed] = useState(false);

  const handleModalButtonClick = () => {
    toggleModal(!isModalOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', () => checkIsMobile(window.innerWidth < 960));

    return () => window.removeEventListener('resize', () => checkIsMobile(window.innerWidth < 960));
  });

  const handleOnClickBurger = () => {
    toggleIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      // toggleIsFixed(true);
      document.body.style.overflow = 'hidden';
    } else {
      // toggleIsFixed(false);
      document.body.style.overflow = 'scroll';
    }
  });

  const handleScroll = () => {
    const windowHeight = window.innerHeight;

    if (windowHeight <= window.scrollY) {
      toggleIsFixed(true);
    } else {
      toggleIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', () => handleScroll());
  });

  return (
    <StyledNav isFixed={isFixed}>
      <Logo />
      {isMobile ? (
        <>
          <Burger isActive={isActive} handleOnClick={handleOnClickBurger} />
          <StyledModalNav isActive={isActive}>
            <NavList isMobile={isMobile} />
            <Button onClick={handleModalButtonClick}>Create Cycle</Button>
          </StyledModalNav>
        </>
      ) : (
        <StyledRightNav>
          <NavList />
          <Button onClick={handleModalButtonClick}>Create Cycle</Button>
        </StyledRightNav>
      )}
    </StyledNav>
  );
};

const mapStateToProps = state => {
  return {
    isModalOpen: state.isModalOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: isModalOpen => dispatch(toggleModal(isModalOpen)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
