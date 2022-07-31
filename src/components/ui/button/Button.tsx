import React from "react";
import classes from "./Button.module.scss";

export const Button = ({ ...props }) => {
  return (
    <button className={classes.button} {...props}>
      {props.children}
    </button>
  );
};
