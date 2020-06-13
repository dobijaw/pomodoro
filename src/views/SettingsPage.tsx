import React from 'react';
import PageTemplate from 'templates/PageTemplate';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import PageTitle from 'components/atoms/PageTitle/PageTitle';

const SettingsPage = () => (
  <PageTemplate isSubPage>
    <PageTitle>Settings</PageTitle>
    <Label htmlFor="projectName">
      Project
      <Input id="projectName" placeholder="Choose project" type="number" />
    </Label>
    <Label htmlFor="projectName">
      Project
      <Input
        id="projectName"
        placeholder="Choose project"
        type="time"
        step="1"
        min="00:00:00"
        max="20:00:00"
      />
    </Label>
  </PageTemplate>
);

export default SettingsPage;
