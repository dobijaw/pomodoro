import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Project } from 'store/projects/types';
import styled, { keyframes } from 'styled-components';
import { removeProject } from 'store/projects/actions';
import IconButton from 'components/atoms/IconButton/IconButton';
import Count from 'components/atoms/Count/Count';
import NoData from 'components/atoms/NoData/NoData';

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

const ListItem = styled.li<{ noRemove?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ noRemove }) => (noRemove ? '0' : '20px 0')};
  color: ${({ theme }) => theme.colors.copy};
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  animation: ${itemIn} 5s;

  &:not(:first-of-type) {
    border-top: 1px solid ${({ theme }) => theme.colors.background20};
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 20px 0;
  border: none;
  background: none;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-transform: inherit;
  cursor: pointer;
  transition: background 0.35s;

  &:hover {
    background: ${({ theme }) => theme.colors.background20};
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
  removeProject: (id: string) => removeProject(id),
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ProjectListProps = PropsFromRedux & {
  projects: Project[];
  noRemove?: boolean;
  getProject?: (project: Project) => void;
};

const ProjectList = ({
  projects,
  removeProject,
  noRemove,
  getProject,
}: ProjectListProps) => (
  <List>
    {!!projects.length ? (
      projects.map((p) => (
        <ListItem key={p.id} noRemove={noRemove}>
          {noRemove ? (
            <Button
              type="button"
              onClick={() => {
                if (getProject) getProject(p);
              }}
            >
              <span>{p.name}</span>
            </Button>
          ) : (
            <>
              <span>{p.name}</span>
              <ItemWrapper>
                <StyledCount>{p.sessionCount}</StyledCount>
                {!noRemove && (
                  <IconButton
                    type="button"
                    onClick={() => removeProject(p.id)}
                    asDelete
                  />
                )}
              </ItemWrapper>
            </>
          )}
        </ListItem>
      ))
    ) : (
      <NoData>No project yet</NoData>
    )}
  </List>
);

export default connector(ProjectList);
