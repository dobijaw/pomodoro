import { useEffect, useCallback, useRef } from 'react';

export function useClickOutside(callback: () => void) {
  const ref = useRef(null);

  function handleClick(event: MouseEvent) {
    if (!(ref.current! as any).contains(event.target)) callback();
  }

  const handleClickCallback = useCallback(handleClick, [callback, ref]);

  useEffect(() => {
    document.addEventListener('click', handleClickCallback);

    return () => document.removeEventListener('click', handleClickCallback);
  }, [handleClickCallback]);

  return ref;
}
