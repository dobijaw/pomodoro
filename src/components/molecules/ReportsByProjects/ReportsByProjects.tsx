import React, { useState } from 'react';
import styled from 'styled-components';

import List from 'components/atoms/List/List';
import ListItem from 'components/atoms/ListItem/ListItem';

import ReportHead from 'components/molecules/ReportHead/ReportHead';
import ReportList from 'components/molecules/ReportList/ReportList';

const data = [
  {
    id: '2435363463464',
    name: 'Pomodoro App',
    count: 5,
    sessions: [
      {
        id: '23476',
        date: '2020/06/200',
        sessionTime: 25,
        restTime: 25,
      },
      {
        id: '23476',
        date: '2020/06/200',
        sessionTime: 25,
        restTime: 25,
      },
      {
        id: '23476',
        date: '2020/06/200',
        sessionTime: 25,
        restTime: 25,
      },
      {
        id: '23476',
        date: '2020/06/200',
        sessionTime: 25,
        restTime: 25,
      },
    ],
  },
  {
    id: '24353634623233464',
    name: 'AppAPP App',
    count: 5,
    sessions: [
      {
        id: '23476',
        date: '2020/06/200',
        sessionTime: 25,
        restTime: 25,
      },
      {
        id: '23476',
        date: '2020/06/200',
        sessionTime: 25,
        restTime: 25,
      },
      {
        id: '23476',
        date: '2020/06/200',
        sessionTime: 25,
        restTime: 25,
      },
      {
        id: '23476',
        date: '2020/06/200',
        sessionTime: 25,
        restTime: 25,
      },
    ],
  },
];

const ReportsByProjects = () => {
  const [openList, setOpenList] = useState<string>('');

  return (
    <List>
      {data.map((projects) => (
        <ListItem key={projects.id}>
          <ReportHead
            title={projects.name}
            count={projects.count}
            listOpen={openList === projects.id}
            onClick={() =>
              setOpenList((prev) => (prev === projects.id ? '' : projects.id))
            }
          />

          <ReportList
            listOpen={openList === projects.id}
            sessions={projects.sessions.map((i) => ({
              id: String(Math.random()),
              date: `${i.date}`,
              sessionTime: i.sessionTime,
              restTime: i.restTime,
            }))}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ReportsByProjects;
