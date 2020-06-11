import React from 'react';
import styled from 'styled-components';
import CycleItem from 'components/atoms/CycleItem/CycleItem';

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 40px 0;
`;

const StyledItem = styled.li`
  padding: 0;
  margin: 0 14px;
`;

type CycleProgressProps = {
  cycle?: {
    released: boolean;
    key: number;
  }[];
};

const CycleProgress = ({ cycle }: CycleProgressProps) => (
  <StyledList>
    {cycle &&
      cycle.map((item) => (
        <StyledItem key={item.key}>
          <CycleItem fillDot={item.released} />
        </StyledItem>
      ))}
  </StyledList>
);

export default CycleProgress;
