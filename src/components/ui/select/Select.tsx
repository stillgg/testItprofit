import React from "react";
import classes from "./Select.module.scss";

export const Select = ({ ...props }) => {
  return (
    <select className={classes.select} {...props}>
      {props.children}
    </select>
  );
};
