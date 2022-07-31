export const formatPhoneNumber = (v: string | number) => {
  const str = v.toString();

  const phoneNumber = str.replace(/[^\d]/g, "");

  const result = `${phoneNumber.slice(1, 4)}${
    phoneNumber[4] ? " " : ""
  }${phoneNumber.slice(4, 7)}${phoneNumber[7] ? " " : ""}${phoneNumber.slice(
    7,
    9
  )}${phoneNumber[9] ? " " : ""}${phoneNumber.slice(9, 11)}`;

  return result;
};

export const formatDate = (date: Date | string) => {
  if (typeof date === "string") {
    const [month, day, year] = date.slice(0, 10).split("/");
    return `${day}.${month}.${year}`;
  }

  const [year, month, day] = date.toISOString().slice(0, 10).split("-");

  return `${day}.${month}.${year}`;
};
