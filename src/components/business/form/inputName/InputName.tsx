import React, { ChangeEvent, memo, useCallback, useState } from "react";

import { useValidate } from "../../../../hooks/useValidate";

import { Input } from "../../../ui/input/Input";

export const InputName = memo(
  ({
    isError,
    errorMessage,
    validate: validateName,
    value,
    setValue,
    className,
  }: InputProps) => {
    const onChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toUpperCase();

        setValue(value);
        validateName(value);
      },
      [value]
    );

    const onBlur = useCallback(() => {
      validateName(value);
    }, [value]);

    return (
      <Input
        name="name"
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={className}
        errorMessage={errorMessage}
        isError={isError}
        placeholder="Введите имя и фамилию"
        type="text"
      />
    );
  }
);
