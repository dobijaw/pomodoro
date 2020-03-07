import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';

const StyledWrapper = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.details};
  margin: 20px 0;
`;

const FormItem = ({ label, type }) => (
  <StyledWrapper>
    <Label>{label}</Label>
    <Input placeholder="e.g. 5:00" type={type} />
  </StyledWrapper>
);

FormItem.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormItem.defaultProps = {
  type: 'text',
};

export default FormItem;
