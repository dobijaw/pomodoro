import React from 'react';
import styled from 'styled-components';
import CloseButton from 'components/atoms/CloseButton/CloseButton';
import NumberItem from 'components/molecules/NumberItem/NumberItem';
import Headline from 'components/atoms/Headline/Headline';
import { connect } from 'react-redux';
import { removeProject } from 'actions';

const StyledProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledRightSide = styled.div`
  display: flex;
  align-items: center;
`;

const ProjectItem = ({ name, sessionNum, removeProject }) => {
  return (
    <StyledProjectWrapper>
      <Headline>{name}</Headline>
      <StyledRightSide>
        <NumberItem number={sessionNum} />
        <CloseButton handleClick={() => removeProject(name)} />
      </StyledRightSide>
    </StyledProjectWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeProject: title => dispatch(removeProject({ title })),
  };
};

export default connect(null, mapDispatchToProps)(ProjectItem);
