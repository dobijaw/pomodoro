import React from 'react';
import Timer from 'components/atoms/Timer/Timer';
import NextTimer from 'components/molecules/NextTimer/NextTimer';
import Button from 'components/atoms/Button/Button';

const TimerTemplate = () => {
  return (
    <div>
      <NextTimer next="Next break" time="5:00" />
      <Timer active>25:00</Timer>
      <div>
        <Button type="button" fillButton>
          stop
        </Button>
        <Button type="button" fillButton>
          start
        </Button>
      </div>
    </div>
  );
};

export default TimerTemplate;
