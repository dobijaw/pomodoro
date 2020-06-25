import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProjectsState } from 'store/projects/types';
import { ProjectsList } from 'models/ReportsByProject.model';

import { getFormat } from 'utils';

import List from 'components/atoms/List/List';
import ListItem from 'components/atoms/ListItem/ListItem';

import ReportHead from 'components/molecules/ReportHead/ReportHead';
import ReportList from 'components/molecules/ReportList/ReportList';

interface State {
  projects: ProjectsState;
}

interface Props {
  reports?: ProjectsList;
}

const ReportsByProjects = ({ reports }: Props) => {
  const [openList, setOpenList] = useState<string>('');
  const projectsList = useSelector(
    ({ projects }: State) => projects.projectsList
  );

  return (
    <List>
      {reports &&
        reports.map((projects) => (
          <ListItem key={projects.id}>
            <ReportHead
              title={
                projectsList.find((p) => p.id === projects.id)?.name ||
                'No project'
              }
              count={projects.count}
              listOpen={openList === projects.id}
              onClick={() =>
                setOpenList((prev) => (prev === projects.id ? '' : projects.id))
              }
            />

            <ReportList
              listOpen={openList === projects.id}
              sessions={projects?.sessions.map((i: any) => ({
                id: String(Math.random()),
                date: getFormat(i.date),
                sessionTime: i.actionTime,
                restTime: i.restTime,
              }))}
            />
          </ListItem>
        ))}
    </List>
  );
};

export default ReportsByProjects;
