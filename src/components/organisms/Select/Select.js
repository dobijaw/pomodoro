import React, { useState } from 'react';
import styled from 'styled-components';
import SelectProject from 'components/molecules/SelectProject/SelectProject';
import SelectProjectList from 'components/molecules/SelectProjectList/SelectProjectList';

const StyledWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
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
      {isOpen && <SelectProjectList closeListFn={closeList} />}
    </StyledWrapper>
  );
};

export default Select;
