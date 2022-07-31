import React, { memo, SyntheticEvent } from "react";
import DatePicker from "react-datepicker";

import classes from "./InputDate.module.scss";

import "react-datepicker/dist/react-datepicker.css";

import { CustomHeader } from "./customHeader/CustomHeader";
import { DateBtn } from "./dateBtn/DateBtn";
import { ErrorMessage } from "../../../ui/error/ErrorMessage";

interface InputDateProps {
  isError: boolean;
  errorMessage: string;
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

export const InputDate: React.FC<InputDateProps> = memo(
  ({ startDate, setStartDate, isError, errorMessage }) => {
    const onClick = (e: SyntheticEvent) => {
      e.preventDefault();
    };

    return (
      <>
        <DatePicker
          className={classes.inputDate}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <CustomHeader
              date={date}
              changeYear={changeYear}
              changeMonth={changeMonth}
              decreaseMonth={decreaseMonth}
              increaseMonth={increaseMonth}
              prevMonthButtonDisabled={prevMonthButtonDisabled}
              nextMonthButtonDisabled={nextMonthButtonDisabled}
            />
          )}
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
          customInput={<DateBtn isError={isError} onClick={onClick} />}
        />

        <ErrorMessage isError={isError} errorMessage={errorMessage} />
      </>
    );
  }
);
