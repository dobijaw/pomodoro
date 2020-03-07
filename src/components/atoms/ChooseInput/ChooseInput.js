import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  display: block;
  width: 15px;
  height: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input:checked ~ span {
    background-color: ${({ theme }) => theme.colors.details};
  }

  &:hover {
    > input ~ span {
      background: ${({ theme }) => theme.colors.details};
    }
  }
`;

const StyledInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 15px;
  height: 15px;
  z-index: 1;
  opacity: 0;
  cursor: pointer;
`;

const StyledMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 15px;
  height: 15px;
  border: 2px solid ${({ theme }) => theme.colors.buttons};
  border-radius: 50%;
  background: none;
  transition: all 0.35s;

  ${({ type }) =>
    type !== 'radio' &&
    css`
      border-radius: 1px;
    `}
`;

const ChooseInput = ({ type, id, name }) => (
  <>
    <StyledWrapper>
      <StyledInput id={id} type={type || 'radio'} name={name} />
      <StyledMark type={type} />
    </StyledWrapper>
  </>
);

ChooseInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ChooseInput.defaultProps = {
  type: 'radio',
};

export default ChooseInput;
