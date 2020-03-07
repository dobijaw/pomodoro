import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NumberShape from 'components/atoms/NumberShape/NumberShape';
import Label from 'components/atoms/Label/Label';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 60px;
`;

const StyledLabel = styled(Label)`
  display: block;
  margin-right: 10px;
`;

const NumberItem = ({ number }) => (
  <StyledWrapper>
    <StyledLabel as="span">session</StyledLabel>
    <NumberShape>{number}</NumberShape>
  </StyledWrapper>
);

NumberItem.propTypes = {
  number: PropTypes.number.isRequired,
};

export default NumberItem;
