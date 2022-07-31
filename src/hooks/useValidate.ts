import { useCallback, useEffect, useState } from "react";
import { isLatin, isCorrectEmail } from "../helpers/validationHelpers";

interface useValidateParam {
  type?: "name" | "email" | "tel" | "message" | "date";
  value?: string;
}

export const useValidate = ({ type, value }: useValidateParam) => {
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Неверное имя или фамилия");

  const callError = useCallback((error: string) => {
    setErrorMessage(error || "");
    setError(true);
  }, []);

  const resetError = useCallback((defaultError: string) => {
    setErrorMessage(defaultError);
    setError(false);
  }, []);

  const validateName = useCallback((value: string) => {
    const arr = value.split(" ");
    const [name, lastName] = arr.map((i) => i.toUpperCase());

    if (arr.length > 2) {
      return callError("Неверное имя или фамилия");
    }

    if (name !== undefined || lastName !== undefined) {
      if (name === "" || name === undefined) {
        return callError("Имя не может быть пустым");
      }

      if (lastName === "" || lastName === undefined) {
        return callError("Фамилия не может быть пустой");
      }

      if (name === undefined || name.length < 3) {
        return callError("Имя не может быть меньше 3 символов");
      }

      if (lastName.length < 3) {
        return callError("Фамилия не может быть меньше 3 символов");
      }

      if (name.length > 30) {
        return callError("Имя не может быть больше 30 символов");
      }

      if (lastName.length > 30) {
        return callError("Фамилия не может быть больше 30 символов");
      }

      if (isLatin(name) === false || isLatin(lastName) === false) {
        return callError("Имя и фамилия должны быть латинского алфавита");
      }
    }

    return resetError("Неверное имя или фамилия");
  }, []);

  const validateEmail = useCallback((value: string) => {
    const errorMessage = "Неверный email";

    if (isCorrectEmail(value)) {
      return resetError(errorMessage);
    }

    return callError(errorMessage);
  }, []);

  const validateTel = useCallback((value: string) => {
    const errorMessage = "Неверный номер телефона";
    if (value.length < 13) {
      return callError(errorMessage);
    }
    return resetError(errorMessage);
  }, []);

  const validateMessage = useCallback((value: string) => {
    const errorMessage =
      "Поле должно иметь минимальную длину в 10 символов и максимальную в 300.";

    if (value.length < 10 || value.length > 300) {
      return callError(errorMessage);
    }

    return resetError(errorMessage);
  }, []);

  const validateDate = useCallback((value: Date | null) => {
    const errorMessage = "Укажите дату";

    if (value === undefined || value === null) {
      return callError(errorMessage);
    }

    return resetError(errorMessage);
  }, []);

  useEffect(() => {
    if (type !== undefined && value !== undefined && value !== "") {
      if (type === "name") {
        return validateName(value);
      }

      if (type === "email") {
        return validateEmail(value);
      }

      if (type === "tel") {
        return validateTel(value);
      }

      if (type === "message") {
        return validateMessage(value);
      }

      if (type === "date" && typeof value !== "string") {
        return validateDate(value);
      }
    }
  }, [value]);

  return {
    isError,
    errorMessage,
    validateName,
    validateEmail,
    validateTel,
    validateMessage,
    validateDate,
  };
};
