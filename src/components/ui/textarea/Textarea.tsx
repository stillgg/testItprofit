import React, { DOMAttributes } from "react";

import classes from "./Textarea.module.scss";

import { ErrorMessage } from "../error/ErrorMessage";

interface Textarea {
  name?: string;
  value?: string;
  isError?: boolean;
  errorMessage?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
}

type TextareaProps = Textarea & DOMAttributes<HTMLTextAreaElement>;

export const Textarea: React.FC<TextareaProps> = ({
  name = "",
  isError = false,
  errorMessage = "",
  className = "",
  required = false,
  placeholder = "",
  value = "",
  ...props
}) => {
  return (
    <label className={`${classes.textareaContainer} ${className}`}>
      <textarea
        name={name}
        value={value}
        className={`${classes.textarea} ${isError && classes.error}`}
        placeholder={placeholder}
        required={required}
        {...props}
      >
        {props.children}
      </textarea>
      <ErrorMessage isError={isError} errorMessage={errorMessage} />
    </label>
  );
};
