import React, { useState } from 'react';
import PageTemplate from 'templates/PageTemplate';
import PageTitle from 'components/atoms/PageTitle/PageTitle';
import RadioForm from 'components/molecules/RadioForm/RadioForm';

function HistoryPage() {
  const [isByDate, toggleByDate] = useState<boolean>(true);

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
    </PageTemplate>
  );
}

export default HistoryPage;
