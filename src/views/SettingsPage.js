import React from 'react';
import Title from 'components/atoms/Title/Title';
import UserTemplate from 'templates/UserTemplate';
import SettingsTemplate from 'templates/SettingsTemplate';

const SettingsPage = () => (
  <UserTemplate>
    <Title onlyScreenreader>Settings</Title>
    <SettingsTemplate />
  </UserTemplate>
);

export default SettingsPage;
