import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from 'components/atoms/Label/Label';
import ChooseInput from 'components/atoms/ChooseInput/ChooseInput';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;

  > label {
    margin-left: 6px;
  }
`;

const FormCooseItem = ({ children, name, type, id, isChecked, handleOnChange }) => (
  <StyledWrapper>
    <Label htmlFor={id}>{children}</Label>
    <ChooseInput
      type={type}
      name={name}
      id={id}
      isChecked={isChecked}
      handleOnChange={handleOnChange}
    />
  </StyledWrapper>
);

FormCooseItem.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
};

FormCooseItem.defaultProps = {
  type: 'radio',
};

export default FormCooseItem;
