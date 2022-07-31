export const isNumber = (v: string | number) => !isNaN(+v);

export const isLatin = (str?: string) => {
  if (!str) return false;
  return /^[a-zA-Z\s]+$/.test(str);
};

export const isCorrectEmail = (str?: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(str || "");
