import React from 'react';
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

const FormCooseItem = ({ children, name, type, id }) => (
  <StyledWrapper>
    <Label htmlFor={id}>{children}</Label>
    <ChooseInput type={type} name={name} id={id} />
  </StyledWrapper>
);

export default FormCooseItem;
