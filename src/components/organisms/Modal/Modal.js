import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import CloseButton from 'components/atoms/CloseButton/CloseButton';
import Headline from 'components/atoms/Headline/Headline';
import FormChooseItem from 'components/molecules/FormChooseItem/FormChooseItem';
import FormItem from 'components/molecules/FormItem/FormItem';
import Select from 'components/organisms/Select/Select';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { changeModalSettings } from 'actions';

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80vw;
  max-width: 800px;
  height: 80vh;
  padding: 50px 20px 20px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.backgroundLighter};
  box-shadow: 5px 2px 10px 0px rgba(24, 27, 30, 0.3);
  transform: translate(-50%, -50%);
  z-index: 100;
  overflow-y: scroll;

  @media (min-width: 960px) {
    height: 60vh;
    padding: 70px;
  }

  > .modal {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const StyledSelect = styled.div`
  margin-top: 10px;

  @media (min-width: 960px) {
    display: flex;
  }

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

const handleCycleTimeChange = () => {
  // eslint-disable-next-line
  console.log('work');
};

// eslint-disable-next-line
const Modal = ({ handleCloseModal, currentModalSettings, changeModalSettings }) => {
  const modalRef = useRef(null);
  const [curSeetings, setCurSettings] = useState(currentModalSettings);
  changeModalSettings(curSeetings);

  const handleClickOutsieModal = e => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseModal();
    }
  };

  const handleOnChangeNumberInput = () => {
    console.log('work');
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsieModal);

    return () => {
      document.removeEventListener('click', handleClickOutsieModal);
    };
  });

  return (
    <StyledWrapper ref={modalRef}>
      <CloseButton parentElementClass="modal" handleClick={handleCloseModal} />
      <Headline>Create cycle</Headline>
      <StyledSelect>
        <FormChooseItem
          name="cycle-type"
          type="radio"
          id="same-cycle"
          data-name="same"
          isChecked={curSeetings === 'same'}
          handleOnChange={() => setCurSettings('same')}
        >
          Same session
        </FormChooseItem>
        <FormChooseItem
          name="cycle-type"
          type="radio"
          id="custom-cycle"
          data-name="other"
          isChecked={curSeetings === 'other'}
          handleOnChange={() => setCurSettings('other')}
        >
          Custom session
        </FormChooseItem>
      </StyledSelect>
      <StyledChoice>
        <Select />
        <StyledCustomSession>
          <FormItem
            label="number of sessions"
            type="number"
            inputValue="1"
            handleOnChange={handleOnChangeNumberInput}
            name="sessionNumber"
            placeholder="number of sessions"
          />
          <FormItem
            name="sessionTime"
            placeholder="here we go"
            value="00:00:20"
            type="time"
            step="1"
            min="00:00:00"
            max="20:00:00"
            onChange={handleCycleTimeChange}
            focusBackgorund
            label="Session Time"
          />
          <FormItem
            name="breakTime"
            placeholder="here we go"
            value="00:00:20"
            type="time"
            step="1"
            min="00:00:00"
            max="20:00:00"
            onChange={handleCycleTimeChange}
            focusBackgorund
            label="Break Time"
          />
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

const mapStateToProps = state => {
  return {
    currentModalSettings: state.modalSettigs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeModalSettings: modalSettings => dispatch(changeModalSettings(modalSettings)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
