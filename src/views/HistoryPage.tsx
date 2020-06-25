import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PageTemplate from 'templates/PageTemplate';
import PageTitle from 'components/atoms/PageTitle/PageTitle';
import RadioForm from 'components/molecules/RadioForm/RadioForm';
import { Reports } from 'models/ReportsByDate.model';

import { ReportsState } from 'store/reports/types';
import { ProjectsState } from 'store/projects/types';
import ReportsByDate from 'components/molecules/ReportsByDate/ReportsByDate';
import ReportsByProjects from 'components/molecules/ReportsByProjects/ReportsByProjects';

import { ProjectsList } from 'models/ReportsByProject.model';

interface State {
  reports: ReportsState;
  projects: ProjectsState;
}

function HistoryPage() {
  const [isByDate, toggleByDate] = useState<boolean>(true);
  const reports = useSelector(({ reports }: State) => reports.reports);

  const [sortByDate, setSortByDate] = useState<Reports>([]);
  const [sortByProjects, setSortByProjects] = useState<ProjectsList>([]);

  useEffect(() => {
    const arr: ProjectsList = [];

    if (!!reports.length) {
      reports.forEach((r) => {
        const isIndexProjectExist = arr.findIndex((i) => i.id === r.projectId);

        if (isIndexProjectExist === -1) {
          const newProject = {
            id: r.projectId,
            count: 1,
            sessions: [
              {
                id: `${r.date}_${r.projectId}`,
                date: r.date,
                actionTime: r.session.actionTime,
                restTime: r.session.restTime,
              },
            ],
          };

          arr.push(newProject);
        } else {
          const existingProject = arr[isIndexProjectExist];
          existingProject.count = existingProject.count + 1;
          existingProject.sessions = [
            ...existingProject.sessions,
            {
              id: `${r.date}_${r.projectId}`,
              date: r.date,
              actionTime: r.session.actionTime,
              restTime: r.session.restTime,
            },
          ];
        }
      });
    }

    setSortByProjects(arr);
  }, [reports]);

  useEffect(() => {
    const arr: Reports = [];

    if (!!reports.length) {
      reports.forEach((el) => {
        const indexIfDateExist = arr.findIndex(
          (i) => i.date.setHours(0, 0, 0, 0) === el.date.setHours(0, 0, 0, 0)
        );

        if (indexIfDateExist === -1) {
          const reportsByDate = {
            date: el.date,
            projects: [
              {
                id: `${el.date.setHours(0, 0, 0, 0)}_${el.projectId}`,
                projectId: el.projectId,
                count: 1,
                sessions: [
                  {
                    actionTime: el.session.actionTime,
                    restTime: el.session.restTime,
                  },
                ],
              },
            ],
          };

          arr.push(reportsByDate);
        } else {
          const { projects } = arr[indexIfDateExist];

          const indexIfProjectExist = projects.findIndex(
            (project: any) =>
              project.id === `${el.date.setHours(0, 0, 0, 0)}_${el.projectId}`
          );

          if (indexIfProjectExist === -1) {
            const newProject = {
              id: `${el.date.setHours(0, 0, 0, 0)}_${el.projectId}`,
              projectId: el.projectId,
              count: 1,
              sessions: [
                {
                  actionTime: el.session.actionTime,
                  restTime: el.session.restTime,
                },
              ],
            };

            projects.push(newProject);
          } else {
            const projectExist = projects[indexIfProjectExist];
            projectExist.count = projectExist.count + 1;
            projectExist.sessions = [
              ...projectExist.sessions,
              {
                actionTime: el.session.actionTime,
                restTime: el.session.restTime,
              },
            ];
          }
        }
      });
    }

    setSortByDate(arr);
  }, [reports]);

  return (
    <PageTemplate isSubPage>
      <PageTitle>Pomodoro History</PageTitle>
      <RadioForm
        inputs={[
          {
            id: 'byDate',
            label: 'By date',
            type: 'radio',
            name: 'sort',
            onChange: () => toggleByDate(true),
            checked: isByDate,
          },
          {
            id: 'byProjects',
            label: 'By project',
            type: 'radio',
            name: 'sort',
            onChange: () => toggleByDate(false),
            checked: !isByDate,
          },
        ]}
      />
      {isByDate ? (
        <ReportsByDate reports={sortByDate} />
      ) : (
        <ReportsByProjects reports={sortByProjects} />
      )}
    </PageTemplate>
  );
}

export default HistoryPage;
