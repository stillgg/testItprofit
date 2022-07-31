import React, { forwardRef, SyntheticEvent, useMemo } from "react";

import classes from "./DateBtn.module.scss";

import { formatDate } from "../../../../../helpers/formatHelpers";
import { Input } from "../../../../ui/input/Input";

interface DateBtnProps {
  value?: string;
  isError?: boolean;
  onClick?: (e: SyntheticEvent) => void;
}

export const DateBtn = forwardRef<HTMLDivElement, DateBtnProps>(
  ({ value, isError = false, ...props }, ref) => {
    const formattedDate = useMemo(() => value && formatDate(value), [value]);

    return (
      <>
        <Input name="birthday-date" type="hidden" value={formattedDate} />
        <div ref={ref} {...props}>
          <div className={`${classes.btn} ${isError && classes.error}`}>
            Дата рождения: {formattedDate}
          </div>
        </div>
      </>
    );
  }
);
