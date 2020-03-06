import React from 'react';
import styled from 'styled-components';
import CloseButton from 'components/atoms/CloseButton/CloseButton';

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 70vw;
  max-width: 600px;
  height: 60vh;
  padding: 70px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.backgroundLighter};
  box-shadow: 5px 2px 10px 0px rgba(24, 27, 30, 0.3);
  transform: translate(-50%, -50%);

  > .modal {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const Modal = () => (
  <StyledWrapper>
    <CloseButton parentElementClass="modal" />
  </StyledWrapper>
);

export default Modal;
