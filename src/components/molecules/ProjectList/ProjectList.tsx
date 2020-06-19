import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Project } from 'store/projects/types';
import styled from 'styled-components';
import { removeProject } from 'store/projects/actions';
import IconButton from 'components/atoms/IconButton/IconButton';

const List = styled.ul`
  padding: 0;
  margin: 40px 0 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.copy};
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const mapDispatch = {
  removeProject: (id: number) => removeProject(id),
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ProjectListProps = PropsFromRedux & {
  projects: Project[];
};

const ProjectList = ({ projects, removeProject }: ProjectListProps) => (
  <List>
    {projects.map((p) => (
      <ListItem key={p.id}>
        <span>{p.name}</span>
        <span>{p.sessionCount}</span>
        <IconButton
          type="button"
          onClick={() => removeProject(p.id)}
          asDelete
        />
      </ListItem>
    ))}
  </List>
);

export default connector(ProjectList);
