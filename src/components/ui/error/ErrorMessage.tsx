import React from "react";

import classes from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  isError: boolean;
  errorMessage: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  isError,
  errorMessage,
}) => {
  return (
    <div
      className={`${classes.errorMessage} ${
        isError && errorMessage !== "" && classes.active
      }`}
    >
      {errorMessage}
    </div>
  );
};
