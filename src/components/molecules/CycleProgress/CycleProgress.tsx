import React from 'react';

type CycleProgressProps = {
  cycle?: number[];
};

const CycleProgress = ({ cycle }: CycleProgressProps) => (
  <ul>{cycle && cycle.map((item) => <li key={item}></li>)}</ul>
);

export default CycleProgress;
