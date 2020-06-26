import React from 'react';
import styled from 'styled-components';
import CycleItem from 'components/atoms/CycleItem/CycleItem';

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const StyledItem = styled.li`
  padding: 0;
  margin: 0 10px;

  @media (min-width: 960px) {
    margin: 0 12.5px;
  }

  @media (min-width: 1200px) {
    margin: 0 14px;
  }
`;

type CycleProgressProps = {
  cycle?: {
    released: boolean;
    key: number;
  }[];
};

const CycleProgress = ({ cycle }: CycleProgressProps) => (
  <>
    {cycle && (
      <StyledList>
        {cycle.map((item) => (
          <StyledItem key={item.key}>
            <CycleItem fillDot={item.released} />
          </StyledItem>
        ))}
      </StyledList>
    )}
  </>
);

export default CycleProgress;
