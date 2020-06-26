import React from 'react';
import styled from 'styled-components';

import Arrow from 'components/atoms/Arrow/Arrow';
import Headline from 'components/atoms/Headline/Headline';
import Count from 'components/atoms/Count/Count';

const StyledHeadline = styled(Headline)`
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 960px) {
    font-size: 20px;
  }
`;

const StyledArrow = styled(Arrow)`
  margin-left: 20px;
`;

const StyledCount = styled(Count)`
  display: inline-block;
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 0 -10px;
  width: 100%;
  background: none;
  color: inherit;
  font-weight: inherit;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background 0.35s;

  &:hover {
    background: ${({ theme }) => theme.colors.background20};
  }
`;

interface Props {
  title: string;
  count: number;
  onClick: () => void;
  listOpen: boolean;
}

const ReportHead = ({ title, count, listOpen, onClick }: Props) => (
  <Button onClick={onClick}>
    <StyledHeadline>{title}</StyledHeadline>
    <div>
      <StyledCount>{count}</StyledCount>
      <StyledArrow isActive={listOpen} />
    </div>
  </Button>
);

export default ReportHead;
