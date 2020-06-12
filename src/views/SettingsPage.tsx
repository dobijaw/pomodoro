import React from 'react';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';

const SettingsPage = () => (
  <div>
    <h2>Settings</h2>
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
  </div>
);

export default SettingsPage;
