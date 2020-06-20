import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Project } from 'store/projects/types';
import styled, { keyframes } from 'styled-components';
import { removeProject } from 'store/projects/actions';
import IconButton from 'components/atoms/IconButton/IconButton';
import Count from 'components/atoms/Count/Count';

const itemIn = keyframes`
  0% {
    transform: translateY(10px);
  }

  10% {
    transform: translateY(0);
  }
`;

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
  animation: ${itemIn} 5s;

  &:not(:first-of-type) {
    padding: 20px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.background20};
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCount = styled(Count)`
  margin-right: 60px;
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
        <ItemWrapper>
          <StyledCount>{p.sessionCount}</StyledCount>
          <IconButton
            type="button"
            onClick={() => removeProject(p.id)}
            asDelete
          />
        </ItemWrapper>
      </ListItem>
    ))}
  </List>
);

export default connector(ProjectList);
