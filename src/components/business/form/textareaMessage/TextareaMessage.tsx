import React, { ChangeEvent, memo, useCallback } from "react";

import classes from "./TextareaMessage.module.scss";

import { Textarea } from "../../../ui/textarea/Textarea";

export const TextareaMessage = memo(
  ({
    isError,
    errorMessage,
    validate: validateMessage,
    value,
    setValue,
  }: InputProps) => {
    const onChange = useCallback(
      (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
        validateMessage(value);
      },
      [value]
    );

    const onBlur = useCallback(() => {
      validateMessage(value);
    }, [value]);

    return (
      <Textarea
        name="message"
        value={value}
        placeholder="Введите сообщение"
        className={classes.textarea}
        onChange={onChange}
        onBlur={onBlur}
        isError={isError}
        errorMessage={errorMessage}
      >
        {value}
      </Textarea>
    );
  }
);
