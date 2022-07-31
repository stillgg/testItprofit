import React, { memo } from "react";
import { ChangeEvent, useCallback } from "react";
import { useValidate } from "../../../../hooks/useValidate";

import { Input } from "../../../ui/input/Input";

export const InputEmail = memo(
  ({
    isError,
    errorMessage,
    validate: validateEmail,
    value,
    setValue,
    className,
  }: InputProps) => {
    const onChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setValue(value);
        validateEmail(value);
      },
      [value]
    );

    const onBlur = useCallback(() => {
      validateEmail(value);
    }, [value]);

    return (
      <Input
        name="email"
        value={value}
        onChange={onChange}
        className={className}
        errorMessage={errorMessage}
        isError={isError}
        onBlur={onBlur}
        placeholder="Введите email"
        type="text"
      />
    );
  }
);
