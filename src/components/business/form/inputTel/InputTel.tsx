import React, { ChangeEvent, memo, useCallback } from "react";

import { formatPhoneNumber } from "../../../../helpers/formatHelpers";

import { useValidate } from "../../../../hooks/useValidate";

import { Input } from "../../../ui/input/Input";

export const InputTel = memo(
  ({
    isError,
    errorMessage,
    validate: validateTel,
    value,
    setValue,
    className,
  }: InputProps) => {
    const onChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);

        setValue(formattedPhoneNumber);
        validateTel(value);
      },
      [value]
    );

    const onBlur = useCallback(() => {
      validateTel(value);
    }, [value]);

    return (
      <Input
        name="tel"
        value={`+7 ${value}`}
        onChange={onChange}
        className={className}
        errorMessage={errorMessage}
        isError={isError}
        onBlur={onBlur}
        placeholder=""
        type="text"
      />
    );
  }
);
