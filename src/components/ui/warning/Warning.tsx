import React from "react";
import classes from "./Warning.module.scss";

interface WarningProps {
  message: string;
}

export const Warning: React.FC<WarningProps> = ({ message }) => {
  return <div className={classes.warning}>{message}</div>;
};
