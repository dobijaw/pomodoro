import React from 'react';
import styled from 'styled-components';

import { getMinutes, getSeconds } from 'utils';

import List from 'components/atoms/List/List';
import ListItem from 'components/atoms/ListItem/ListItem';
import Label from 'components/atoms/Label/Label';

const SessionItem = styled(ListItem)`
  padding: 7px 10px;

  @media (min-width: 960px) {
    display: flex;
    padding: 5px 10px;
  }
`;

const SessionDetails = styled.div`
  margin-right: 20px;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};

  @media (min-width: 960px) {
    margin-right: 100px;
  }
`;

const Time = styled.span`
  font-weight: 400px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 15px;
`;

interface Props {
  listOpen: boolean;
  sessions: {
    id: string;
    sessionTime: number;
    restTime: number;
    date?: string;
  }[];
}

const ReportList = ({ listOpen, sessions }: Props) => (
  <>
    {listOpen && (
      <List>
        {sessions.map((item) => (
          <SessionItem key={item.id}>
            <SessionDetails>
              Session time:
              <Time>{`${getMinutes(item.sessionTime)} : ${getSeconds(
                item.sessionTime
              )}`}</Time>
            </SessionDetails>
            <SessionDetails>
              Rest time:
              <Time>{`${getMinutes(item.restTime)} : ${getSeconds(
                item.restTime
              )}`}</Time>
            </SessionDetails>
            {item.date && (
              <SessionDetails>
                <Label>{item.date}</Label>
              </SessionDetails>
            )}
          </SessionItem>
        ))}
      </List>
    )}
  </>
);

export default ReportList;
