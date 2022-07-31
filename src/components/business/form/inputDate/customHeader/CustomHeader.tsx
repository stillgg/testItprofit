import React, { ChangeEvent, SyntheticEvent } from "react";
import { getYear, getMonth } from "date-fns";
import { ReactDatePickerCustomHeaderProps } from "react-datepicker";

import classes from "./CustomHeader.module.scss";

import { rangeYears } from "../../../../../helpers/dateHelpers";

import { Button } from "../../../../ui/button/Button";
import { Select } from "../../../../ui/select/Select";

type CustomHeaderProps = Omit<
  ReactDatePickerCustomHeaderProps,
  | "monthDate"
  | "customHeaderCount"
  | "decreaseYear"
  | "increaseYear"
  | "prevYearButtonDisabled"
  | "nextYearButtonDisabled"
>;

export const CustomHeader: React.FC<CustomHeaderProps> = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  const years = rangeYears(1960, getYear(new Date()) + 1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const onDecrease = (e: SyntheticEvent) => {
    e.preventDefault();
    decreaseMonth();
  };

  const onIncrease = (e: SyntheticEvent) => {
    e.preventDefault();
    increaseMonth();
  };

  return (
    <div className={classes.customHeader}>
      <Button onClick={onDecrease} disabled={prevMonthButtonDisabled}>
        {"<"}
      </Button>

      <Select
        value={getYear(date)}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          changeYear(+e.target.value);
        }}
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>

      <Select
        value={months[getMonth(date)]}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          changeMonth(months.indexOf(e.target.value))
        }
      >
        {months.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>

      <Button onClick={onIncrease} disabled={nextMonthButtonDisabled}>
        {">"}
      </Button>
    </div>
  );
};
