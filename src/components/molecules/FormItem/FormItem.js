import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';

const StyledWrapper = styled.div`
  max-width: ${({ width }) => width || '400px'};
  padding: 10px 0 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.details};
  margin: 20px 0;
`;

const FormItem = ({ width, label }) => (
  <StyledWrapper width={width}>
    <Label>{label}</Label>
    <Input placeholder="e.g. 5:00" />
  </StyledWrapper>
);

export default FormItem;
