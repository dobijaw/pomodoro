import React, { useState } from 'react';
import styled from 'styled-components';
import SelectProject from 'components/molecules/SelectProject/SelectProject';
import SelectProjectList from 'components/molecules/SelectProjectList/SelectProjectList';

const classStyledList = 'hello';

const StyledWrapper = styled.div`
  position: relative;
  margin: 0 auto;

  .${classStyledList} {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
  }
`;

const Select = () => {
  const [isOpen, toggleIsOpen] = useState(false);
  const [curProj, setCurProj] = useState('No project selected');

  const handleClick = () => {
    toggleIsOpen(!isOpen);
  };

  const closeList = e => {
    setCurProj(e.target.getAttribute('data-name'));
    toggleIsOpen(false);
  };

  return (
    <StyledWrapper>
      <SelectProject selectedName={curProj} handleClickFn={handleClick} />
      {isOpen && <SelectProjectList classProps={classStyledList} closeListFn={closeList} />}
    </StyledWrapper>
  );
};

export default Select;
