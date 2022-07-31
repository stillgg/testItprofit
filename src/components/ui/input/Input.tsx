import React, {
  DOMAttributes,
  forwardRef,
  HTMLInputTypeAttribute,
} from "react";
import { ErrorMessage } from "../error/ErrorMessage";

import classes from "./Input.module.scss";

interface InputProps {
  name?: string;
  value?: string;
  isError?: boolean;
  required?: boolean;
  className?: string;
  placeholder?: string;
  errorMessage?: string;
  type?: HTMLInputTypeAttribute;
}

export const Input = forwardRef<
  HTMLInputElement,
  InputProps & DOMAttributes<HTMLInputElement>
>(
  (
    {
      name = "",
      isError = false,
      required = false,
      value = "",
      className = "",
      placeholder = "",
      type = "text",
      errorMessage = "",
      ...props
    },
    ref
  ) => {
    return (
      <label
        className={`${classes.inputContainer} ${isError && classes.error}`}
      >
        <input
          name={name}
          ref={ref}
          value={value}
          required={required}
          className={`${classes.input} ${
            isError && classes.error
          } ${className}`}
          placeholder={placeholder}
          type={type}
          {...props}
        />
        <ErrorMessage isError={isError} errorMessage={errorMessage} />
      </label>
    );
  }
);
