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

const FormItem = ({ width }) => (
  <StyledWrapper width={width}>
    <Label>Text here</Label>
    <Input placeholder="Type here..." />
  </StyledWrapper>
);

export default FormItem;
