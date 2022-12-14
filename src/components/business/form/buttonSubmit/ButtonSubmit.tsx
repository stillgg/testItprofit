import React from "react";

import classes from "./ButtonSubmit.module.scss";

import { Button } from "../../../ui/button/Button";

export const ButtonSubmit = ({ ...props }) => {
  return (
    <Button className={classes.button} {...props}>
      {props.children}
    </Button>
  );
};
