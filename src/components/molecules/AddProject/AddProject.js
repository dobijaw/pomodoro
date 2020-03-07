import React, { useState } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { addProject } from 'actions';

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 100px;

  > button {
    margin: 0;
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.details};
  margin-right: 60px;
`;

const AddProject = ({ addProjectName }) => {
  const [inputValue, getInputValue] = useState('');

  const handleChange = e => {
    getInputValue(e.target.value);
  };

  const handleSumbit = e => {
    e.preventDefault();
    addProjectName({ id: 2, title: inputValue, sessions: 0 });
    getInputValue('');
  };

  return (
    <StyledForm onSubmit={handleSumbit}>
      <StyledInputContainer>
        <Input placeholder="Project Name" onChange={handleChange} value={inputValue} />
      </StyledInputContainer>
      <Button type="submit" fillButton>
        Add project
      </Button>
    </StyledForm>
  );
};

const mapDispatchToProps = dispatch => ({
  addProjectName: project => dispatch(addProject(project)),
});

export default connect(null, mapDispatchToProps)(AddProject);
