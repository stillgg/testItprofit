import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import classes from "./Form.module.scss";

import { InputTel } from "./inputTel/InputTel";
import { InputDate } from "./inputDate/InputDate";
import { InputName } from "./inputName/InputName";
import { InputEmail } from "./inputEmail/InputEmail";
import { TextareaMessage } from "./textareaMessage/TextareaMessage";
import { ButtonSubmit } from "./buttonSubmit/ButtonSubmit";
import { useValidate } from "../../../hooks/useValidate";
import { Warning } from "../../ui/warning/Warning";
import { FormTitle } from "./formTitle/FormTitle";

export const Form = () => {
  const [isErrorFromServer, toggleError] = useState(false);

  const [status, setStatus] = useState<"loading" | "error" | null>(null);

  const [name, setName] = useState("");
  const {
    isError: isErrorName,
    errorMessage: errorName,
    validateName,
  } = useValidate({
    type: "name",
    value: name,
  });

  const [email, setEmail] = useState("");
  const {
    isError: isErrorEmail,
    errorMessage: errorEmail,
    validateEmail,
  } = useValidate({
    type: "email",
    value: email,
  });

  const [tel, setTel] = useState("");
  const {
    isError: isErrorTel,
    errorMessage: errorTel,
    validateTel,
  } = useValidate({
    type: "tel",
    value: tel,
  });

  const [startDate, setStartDate] = useState<Date | null>(null);
  const {
    isError: isErrorDate,
    errorMessage: errorDate,
    validateDate,
  } = useValidate({
    type: "date",
    value: tel,
  });

  const [message, setMessage] = useState("");
  const {
    isError: isErrorMessage,
    errorMessage: errorMessage,
    validateMessage,
  } = useValidate({
    type: "date",
    value: tel,
  });

  const onSubmit = useCallback(
    (e: ChangeEvent<HTMLFormElement>) => {
      validateName(name);
      validateEmail(email);
      validateTel(tel);
      validateDate(startDate);
      validateMessage(message);

      setStatus("loading");

      e.preventDefault();
    },
    [name, email, tel, startDate, message]
  );

  useEffect(() => {
    if (
      !isErrorName &&
      !isErrorEmail &&
      !isErrorTel &&
      !isErrorDate &&
      !isErrorMessage &&
      status === "loading"
    ) {
      const timer = setTimeout(() => {
        clearTimeout(timer);

        if (isErrorFromServer) {
          setStatus("error");
        } else {
          setStatus(null);
          setName("");
          setEmail("");
          setTel("");
          setStartDate(null);
          setMessage("");
        }
      }, 1500);
    }
  }, [status]);

  console.log("status", status);

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <FormTitle />

      {status === "error" ? (
        <>
          <Warning
            message={"произошла внутрення ошибка пожалуйста повторите отправку"}
          />
          <br />
        </>
      ) : null}

      <InputName
        isError={isErrorName}
        errorMessage={errorName}
        validate={validateName}
        value={name}
        setValue={setName}
        className={classes.input}
      />
      <InputEmail
        isError={isErrorEmail}
        errorMessage={errorEmail}
        validate={validateEmail}
        value={email}
        setValue={setEmail}
        className={classes.input}
      />
      <InputTel
        isError={isErrorTel}
        errorMessage={errorTel}
        validate={validateTel}
        value={tel}
        setValue={setTel}
        className={classes.input}
      />
      <InputDate
        isError={isErrorDate}
        errorMessage={errorDate}
        startDate={startDate}
        setStartDate={setStartDate}
      />
      <TextareaMessage
        isError={isErrorMessage}
        errorMessage={errorMessage}
        validate={validateMessage}
        value={message}
        setValue={setMessage}
      />
      {status === "loading" ? (
        <ButtonSubmit disabled>Отправка формы на сервер..</ButtonSubmit>
      ) : (
        <ButtonSubmit>Отправить форму</ButtonSubmit>
      )}

      <br />

      <label>
        <input
          checked={isErrorFromServer}
          onChange={() => toggleError(!isErrorFromServer)}
          type="checkbox"
        />
        сгенерировать ошибку со стороны сервера
      </label>
    </form>
  );
};
