export const rangeYears = (start: number, end: number) => {
  const arr = [];

  for (let i = start; i < end; i++) {
    arr.push(i);
  }

  return arr;
};
