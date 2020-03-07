import React from 'react';
import Title from 'components/atoms/Title/Title';
import UserTemplate from 'templates/UserTemplate';
import HistoryTemplate from 'templates/HistoryTemplate';

const HistoryPage = () => (
  <UserTemplate>
    <Title onlyScreenreader>History</Title>
    <HistoryTemplate />
  </UserTemplate>
);

export default HistoryPage;
