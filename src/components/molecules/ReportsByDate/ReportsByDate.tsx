import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { getFormat } from 'utils';
import { ProjectsState } from 'store/projects/types';
import { Reports } from 'models/ReportsByDate.model';

import List from 'components/atoms/List/List';
import ReportHead from 'components/molecules/ReportHead/ReportHead';
import Label from 'components/atoms/Label/Label';
import ReportList from 'components/molecules/ReportList/ReportList';

const ListItem = styled.li`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.copy};
`;

interface State {
  projects: ProjectsState;
}

interface Props {
  reports?: Reports;
}

const ReportsByDate = ({ reports }: Props) => {
  const [openList, setOpenList] = useState<string>('');
  const projects = useSelector(({ projects }: State) => projects.projectsList);

  return (
    <div>
      {reports &&
        reports.map((projectList) => (
          <div key={`${projectList.date}`}>
            <Label>{getFormat(projectList.date)}</Label>

            <List>
              {projectList.projects.map((project) => (
                <ListItem key={project.id}>
                  <ReportHead
                    title={
                      projects.find((el) => el.id === project.projectId)
                        ?.name || 'No project'
                    }
                    count={project.count}
                    listOpen={openList === project.id}
                    onClick={() =>
                      setOpenList((prev) =>
                        prev === project.id ? '' : project.id
                      )
                    }
                  />
                  <ReportList
                    listOpen={openList === project.id}
                    sessions={project.sessions.map((session) => ({
                      id: String(Math.random()),
                      sessionTime: session.sessionTime,
                      restTime: session.restTime,
                    }))}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        ))}
    </div>
  );
};

export default ReportsByDate;

// reports {
//   reports [
// {
//   date: '2020-03-02',
//   projectId: 'NOPROJECT',
//   session:{
//     sessionId: '2345547346745643',
//     actionTime: 2425436,
//     restTime: 213456546
//   }
// },
// {
//   date: '2020-03-02',
//   projectId: 'NOPROJECT',
//   session:{
//     sessionId: '2345547346745643',
//     actionTime: 2425436,
//     restTime: 213456546
//   }
// }
//   ]
// }
