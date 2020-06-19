import React from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from 'store/projects/actions';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import IconButton from 'components/atoms/IconButton/IconButton';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLabel = styled(Label)`
  width: 100%;
  margin-right: 40px;
`;

function AddProject() {
  const dispatch = useDispatch();

  const newProj = {
    id: 2,
    name: 'eloszka',
    sessionCount: 4,
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addProject(newProj));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <StyledLabel>
        Add new project
        <Input type="text" />
      </StyledLabel>
      <IconButton asAdd type="submit" />
    </Form>
  );
}

export default AddProject;
