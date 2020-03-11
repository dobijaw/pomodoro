import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { addProject } from 'actions';

const StyledForm = styled.form`
  margin: 50px 0 100px;

  @media (min-width: 960px) {
    display: flex;
    justify-content: space-between;
    margin: 50px 0 100px;
  }

  > button {
    margin: 20px 0 0;

    @media (min-width: 960px) {
      margin: 0;
    }
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.details};
  margin-right: 60px;
`;

const AddProject = ({ projects, addProjectName }) => {
  const [inputValue, getInputValue] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    getInputValue(e.target.value);
  };

  const isNameRepeat = (arr, input) =>
    arr.some(item => item.title.toLowerCase() === input.toLowerCase());

  const handleSumbit = e => {
    e.preventDefault();
    if (!inputValue.length) return;
    if (isNameRepeat(projects, inputValue)) return;
    addProjectName({ id: 2, title: inputValue, sessions: 0 });
    getInputValue('');
  };

  return (
    <StyledForm onSubmit={handleSumbit}>
      <StyledInputContainer>
        <Input
          placeholder="Project Name"
          onChange={handleChange}
          value={inputValue}
          ref={inputRef}
        />
      </StyledInputContainer>
      <Button type="submit" fillButton>
        Add project
      </Button>
    </StyledForm>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects,
  };
};

const mapDispatchToProps = dispatch => ({
  addProjectName: project => dispatch(addProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
