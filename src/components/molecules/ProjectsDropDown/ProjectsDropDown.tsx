import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { ProjectsState } from 'store/projects/types';
import { setSelectedProject } from 'store/projects/actions';

import Input from 'components/atoms/Input/Input';
import ProjectList from 'components/molecules/ProjectList/ProjectList';

const Wrapper = styled.div`
  max-width: 400px;
  padding: 20px;
  margin: 10px auto;

  @media (min-height: 680px) {
    margin: 40px auto;
  }

  @media (min-width: 960px) {
    margin: 50px auto;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled(Input)`
  display: block;
`;

const Icon = styled.span<{ isActive: boolean }>`
  position: absolute;
  top: 50%;
  right: 0;
  border: solid ${({ theme }) => theme.colors.secondary};
  border-width: 0 2px 2px 0;
  display: inline-block;
  transform: translate(-50%, -50%) rotate(45deg);
  padding: 3px;
  transition: all 0.35s;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translate(-50%, -50%) rotate(225deg);
    `}
`;

interface State {
  projects: ProjectsState;
}

function ProjectsDropDown() {
  const dispatch = useDispatch();

  const [isListVisible, toggleListVisibility] = useState<boolean>(false);
  const projects = useSelector(({ projects }: State) => projects.projectsList);
  const currentProject = useSelector(
    ({ projects }: State) => projects.projectSelected
  );

  useEffect(() => {
    toggleListVisibility(false);
  }, [currentProject]);

  return (
    <Wrapper>
      <InputWrapper>
        <StyledInput
          type="button"
          value={currentProject?.name}
          onClick={() => toggleListVisibility(!isListVisible)}
        />
        <Icon isActive={isListVisible} />
      </InputWrapper>
      {isListVisible && (
        <ProjectList
          projects={projects}
          noRemove
          getProject={(p) => dispatch(setSelectedProject(p))}
        />
      )}
    </Wrapper>
  );
}

export default ProjectsDropDown;
