import React from 'react';
import styled from 'styled-components';
import Headline from 'components/atoms/Headline/Headline';

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
`;

const BoxModal = styled.div`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  width: 80%;
  max-width: 800px;
  height: 60vh;
  padding: 70px;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.background20};
  box-shadow: 5px 2px 10px 0px rgba(24, 27, 30, 0.3);
`;

type CycleModal = {
  onClose: () => void;
};

function CycleModal({ onClose }: CycleModal) {
  return (
    <Wrapper>
      <BoxModal>
        <button onClick={onClose}>close</button>
        <Headline>Create Cycle</Headline>
      </BoxModal>
    </Wrapper>
  );
}

export default CycleModal;
