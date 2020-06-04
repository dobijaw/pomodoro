import React from 'react';

import Burger from '../components/atoms/Burger/Burger';
import Button from 'components/atoms/Button/Button';
import Timer from 'components/molecules/Timer/Timer';

function TimerView() {
  return (
    <div>
      <Burger type="button" />
      <Button asPrimary={true}>My button</Button>
      <Timer minutes="05" seconds="00" />
      <Timer hours="00" minutes="25" seconds="00" />
    </div>
  );
}

export default TimerView;
