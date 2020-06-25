import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PageTemplate from 'templates/PageTemplate';
import PageTitle from 'components/atoms/PageTitle/PageTitle';
import RadioForm from 'components/molecules/RadioForm/RadioForm';

import { ReportsState, Report } from 'store/reports/types';
import { ProjectsState } from 'store/projects/types';
import { getMinutes, getSeconds } from 'utils';
import ReportsByDate from 'components/molecules/ReportsByDate/ReportsByDate';
import ReportsByProjects from 'components/molecules/ReportsByProjects/ReportsByProjects';

interface State {
  reports: ReportsState;
  projects: ProjectsState;
}

function HistoryPage() {
  const [isByDate, toggleByDate] = useState<boolean>(true);
  const reports = useSelector(({ reports }: State) => reports.reports);
  const projects = useSelector(({ projects }: State) => projects.projectsList);
  // reports.reports.map(i => i.date, i.projectId, i.session.sessionId, i.actionTime, i.restTime)

  const [sortByDate, setSortByDate] = useState<any[]>([]);

  const data = [
    {
      date: '2020/06/20',
      projects: [
        {
          id: '2020/06/20_12345678',
          projectId: 'Pomodoro App',
          count: 5,
          sessions: [
            {
              sessionTime: 25,
              restTime: 5,
            },
            {
              sessionTime: 25,
              restTime: 5,
            },
            {
              sessionTime: 25,
              restTime: 5,
            },
            {
              sessionTime: 25,
              restTime: 5,
            },
            {
              sessionTime: 25,
              restTime: 5,
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    const arr: any[] = [];

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
                name:
                  projects.find((p) => p.id === el.projectId)?.name ||
                  'No project',
                count: 1,
                sessions: [
                  {
                    sessionTime: el.session.actionTime,
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
              name:
                projects.find((p: any) => p.id === el.projectId)?.name ||
                'NO_PROJECT',
              count: 1,
              sessions: [
                {
                  sessionTime: el.session.actionTime,
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
                sessionTime: el.session.actionTime,
                restTime: el.session.restTime,
              },
            ];
          }
        }
      });
    }

    setSortByDate(arr);
  }, [projects, reports]);

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
        <ReportsByProjects />
      )}
    </PageTemplate>
  );
}

export default HistoryPage;
