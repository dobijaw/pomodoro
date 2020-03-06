import React from 'react';
import Title from 'components/atoms/Title/Title';
import UserTemplate from 'templates/UserTemplate';

const SettingsPage = () => (
  <UserTemplate>
    <Title onlyScreenreader>Settings</Title>
  </UserTemplate>
);

export default SettingsPage;
