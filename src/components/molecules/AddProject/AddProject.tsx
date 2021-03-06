import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProjectsState } from 'store/projects/types';
import { addProject } from 'store/projects/actions';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import IconButton from 'components/atoms/IconButton/IconButton';
import FormError from 'components/atoms/FormError/FormError';
import { generateUnicId } from 'utils';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLabel = styled(Label)`
  width: 100%;
  margin-right: 20px;

  @media (min-width: 960px) {
    margin-right: 40px;
  }
`;

interface RootState {
  projects: ProjectsState;
}

function AddProject() {
  const dispatch = useDispatch();

  const getProjects = ({ projects }: RootState) => projects.projectsList;
  const projects = useSelector(getProjects);

  const [newProjectValue, setNewProjectValue] = useState<string>('');
  const [isTooLong, toggleLongStatus] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const isTheSameNameExist = (name: string) =>
    projects.map((p) => p.name).includes(name);

  const isTheSameNameExistCallback = useCallback(isTheSameNameExist, [
    projects,
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (value.length >= 21) {
      toggleLongStatus(true);
      setNewProjectValue(value);
      return;
    }

    toggleLongStatus(false);
    setNewProjectValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isTheSameNameExist(newProjectValue)) {
      setError('The same project exist. Enter another name.');
      return;
    }

    if (isTooLong || !newProjectValue) return;

    dispatch(
      addProject({
        id: generateUnicId(projects.map((i) => i.id)),
        name: newProjectValue,
        sessionCount: 0,
      })
    );

    toggleLongStatus(false);
    setNewProjectValue('');
  };

  useEffect(() => {
    if (!!error && !isTheSameNameExistCallback(newProjectValue)) setError('');
  }, [error, isTheSameNameExistCallback, newProjectValue]);

  return (
    <Form onSubmit={handleSubmit}>
      <StyledLabel>
        Add new project
        <Input
          type="text"
          onChange={handleChange}
          value={newProjectValue}
          placeholder="Type new project name"
        />
        {!!error && <FormError>{error}</FormError>}
        {!!isTooLong && (
          <FormError asCommunicat>That's enough characters :)</FormError>
        )}
      </StyledLabel>
      <IconButton asAdd type="submit" />
    </Form>
  );
}

export default AddProject;
