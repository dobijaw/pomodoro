export function getMinutes(
  ms: number,
  numberReturn?: boolean
): string | number {
  const minutes = Math.floor(ms / 60 / 1000);

  if (numberReturn) return Number(minutes);

  return minutes < 10 ? `0${minutes}` : `${minutes}`;
}

export function getSeconds(
  ms: number,
  numberReturn?: boolean
): string | number {
  const seconds = Math.floor((ms % 60000) / 1000);

  if (numberReturn) return Number(seconds);

  return seconds < 10 ? `0${seconds}` : `${seconds}`;
}

export function generateUnicId(ids: string[]) {
  let id: string;

  do {
    id = String(Math.floor(Math.random() * 10 ** 20));
  } while (ids.includes(id));

  return id;
}

export const getFormat = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};
