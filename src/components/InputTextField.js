import React from "react";
import { TextField } from "@material-ui/core";

export const InputTextField = ({ handleOnChange, func, ...rest }) => (
  <TextField
    {...rest}
    onChange={({ target: { value } }) => handleOnChange(value, func)}
  />
);
