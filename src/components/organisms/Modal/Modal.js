import React from 'react';
import styled from 'styled-components';
import CloseButton from 'components/atoms/CloseButton/CloseButton';
import Headline from 'components/atoms/Headline/Headline';
import FormChooseItem from 'components/molecules/FormChooseItem/FormChooseItem';
import FormItem from 'components/molecules/FormItem/FormItem';
import Select from 'components/organisms/Select/Select';
import Button from 'components/atoms/Button/Button';

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
  z-index: 100;

  > .modal {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const StyledSelect = styled.div`
  display: flex;
  margin-top: 10px;

  > div {
    margin: 0 30px 0 0;
  }
`;

const StyledCustomSession = styled.div`
  display: flex;

  > div:not(:last-of-type) {
    margin-right: 20px;
  }
`;

const StyledChoice = styled.div`
  margin-top: 60px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

const Modal = () => {
  return (
    <StyledWrapper>
      <CloseButton parentElementClass="modal" />
      <Headline>Create cycle</Headline>
      <StyledSelect>
        <FormChooseItem name="cycle-type" type="radio" id="same-cycle">
          Same session
        </FormChooseItem>
        <FormChooseItem name="cycle-type" type="radio" id="custom-cycle">
          Custom session
        </FormChooseItem>
      </StyledSelect>
      <StyledChoice>
        <Select />
        <StyledCustomSession>
          <FormItem label="session" />
          <FormItem label="session time" />
          <FormItem label="break time" />
        </StyledCustomSession>
        <StyledButtonContainer>
          <Button type="button" fillButton>
            Add Cycle
          </Button>
        </StyledButtonContainer>
      </StyledChoice>
    </StyledWrapper>
  );
};

export default Modal;
