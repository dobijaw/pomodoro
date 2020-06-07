import { useState, useEffect, useRef } from 'react';

export const useInterval = (
  callback: () => void,
  delay: number,
  isTimerOnInitial: boolean
) => {
  const [isTimerOn, toggleTimer] = useState<boolean>(isTimerOnInitial);
  const savedCallback = useRef<() => void>(() => {});
  const intervalId = useRef<number>(0);

  const start = () => toggleTimer(true);
  const stop = () => toggleTimer(false);
  const clear = (id: number) => clearInterval(id);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!isTimerOn) return;

    const tick = () => {
      savedCallback.current();
    };

    intervalId.current = setInterval(tick, delay);
    return () => clearInterval(intervalId.current);
  }, [delay, isTimerOn]);

  return [() => start(), () => stop(), () => clear(intervalId.current)];
};
