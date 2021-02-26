import React from "react";
import { Button } from "@material-ui/core";
import { InputTextField } from "./InputTextField";
import { EmployeeContainerStyled } from "../styles/EmployeeContainerStyled"; 

export const EmployeeContainer = ({
  inputName,
  inputLastName,
  inputAge,
  setInputName,
  setInputLastName,
  setInputAge,
  handleOnChange,
  handleCreateEmployee
}) => {
  return (
  <EmployeeContainerStyled>
  <InputTextField
    required
    id="name"
    label="Имя"
    variant="outlined"
    value={inputName}
    func={setInputName}
    handleOnChange={(value, func) => handleOnChange(value, func)}
  />
  <InputTextField
    required
    id="last-name"
    label="Фамилия"
    variant="outlined"
    value={inputLastName}
    func={setInputLastName}
    handleOnChange={(value, func) => handleOnChange(value, func)}
  />
  <InputTextField
    required
    type="number"
    id="age"
    label="Возраст"
    variant="outlined"
    value={inputAge}
    func={setInputAge}
    handleOnChange={(value, func) => handleOnChange(value, func)}
  />
  <Button
    variant="contained"
    color="primary"
    onClick={handleCreateEmployee}
    disabled={!inputName || !inputLastName || !inputAge}
  >
    Создать
  </Button>
</EmployeeContainerStyled>)
}