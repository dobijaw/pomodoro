import React, { useState } from 'react';
import styled from 'styled-components';

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

interface Sessions {
  sessionTime: number;
  restTime: number;
}

interface Projects {
  id: string;
  name: string;
  count: number;
  sessions: Sessions[];
}

interface ProjectsList {
  date: string;
  projects: Projects[];
}

interface Props {
  reports?: ProjectsList[];
}

const data = [
  {
    date: '2020/06/20',
    projects: [
      {
        id: '2020/06/20_12345678',
        name: 'Pomodoro App',
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
      {
        id: '2020/06/20_12343534655678',
        name: 'Mofie App',
        count: 2,
        sessions: [
          {
            sessionTime: 25,
            restTime: 5,
          },
          {
            sessionTime: 30,
            restTime: 7,
          },
        ],
      },
    ],
  },
  {
    date: '2020/06/15',
    projects: [
      {
        id: '2020/06/15_12345642635475378',
        name: 'Pomodoro App',
        count: 1,
        sessions: [
          {
            sessionTime: 20,
            restTime: 2,
          },
        ],
      },
      {
        id: '2020/06/15_1234564223635475378',
        name: 'New App',
        count: 2,
        sessions: [
          {
            sessionTime: 45,
            restTime: 10,
          },
          {
            sessionTime: 30,
            restTime: 7,
          },
        ],
      },
    ],
  },
];

const ReportsByDate = ({ reports }: Props) => {
  const [openList, setOpenList] = useState<string>('');

  const getFormat = (date: string): string => {
    const d = new Date(date);

    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();

    return `${year}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    }`;
  };

  return (
    <div>
      {reports &&
        reports.map((group) => (
          <div key={`${group.date}`}>
            <Label>{getFormat(group.date)}</Label>
            <List>
              {group.projects.map((list) => (
                <ListItem key={list.id}>
                  <ReportHead
                    title={list.name}
                    count={list.count}
                    listOpen={openList === list.id}
                    onClick={() =>
                      setOpenList((prev) => (prev === list.id ? '' : list.id))
                    }
                  />

                  <ReportList
                    listOpen={openList === list.id}
                    sessions={list.sessions.map((i) => ({
                      id: String(Math.random()),
                      sessionTime: i.sessionTime,
                      restTime: i.restTime,
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
