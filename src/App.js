import React, { useState, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import { Typography } from "@material-ui/core";
import {
  addEmployee,
  removeEmployee,
  removeAllEmployee,
  changeOverlayFlag
} from "./utils/actions";
import { PageContainer } from "./styles/PageContainer";
import { EmployeeContainer } from "./components/EmployeeContainer";
import { Table } from "./components/Table";
import { getColumns } from "./utils/getColumns";
import { overlayStyles } from "./styles/overlayStyles";
import { delay } from "./utils/delay";

const App = memo(() => {
  const dispatch = useDispatch();
  const { employees, isOverlay } = useSelector((state) => {
    return { employees: state.employees, isOverlay: state.isOverlay };
  });
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [data, setData] = useState(employees);

  const handleCreateEmployee = () => {
    dispatch(changeOverlayFlag(true));
    delay(2000).then(() => {
      dispatch(addEmployee(inputName, inputLastName, inputAge));
      dispatch(changeOverlayFlag(false));
    });
    setInputName("");
    setInputLastName("");
    setInputAge("");
  };

  const handleOnChange = (value, func) => {
    func(value);
  };

  const handleRemoveEmployee = ({
    dataId,
    rowIndex,
    rowsIndexSelected,
    toggleRowSelected,
    isSelectedNextRow,
    isSelected,
    isAllRowsSelected
  }) => {
    dispatch(changeOverlayFlag(true));
    delay(2000).then(() => {
      const sortSelectedRows = (isSelectedRow) => {
        rowsIndexSelected.forEach((index) => {
          if (index > rowIndex) {
            toggleRowSelected(index, false);
            toggleRowSelected(index - 1, true);
          }
          if (!isSelectedNextRow && isSelectedRow)
            toggleRowSelected(rowIndex, false);
        });
      };

      if (isSelected && !isAllRowsSelected) sortSelectedRows(true);
      else if (!isAllRowsSelected) sortSelectedRows(false);
      dispatch(changeOverlayFlag(false));
      dispatch(removeEmployee(dataId));
    });
  };

  const handleRemoveAllEmployee = ({ toggleAllRowsSelected }) => {
    dispatch(changeOverlayFlag(true));
    delay(2000).then(() => {
      toggleAllRowsSelected(false);
      dispatch(changeOverlayFlag(false));
      dispatch(removeAllEmployee());
    });
  };
  const columns = getColumns(handleRemoveEmployee, handleRemoveAllEmployee);

  useEffect(() => {
    setData(employees);
  }, [employees]);

  return (
    <PageContainer>
      <LoadingOverlay
        active={isOverlay}
        spinner
        text="Ожидайте результата действия..."
        styles={overlayStyles()}
      >
        <Typography variant="h5" gutterBottom>
          Добавить сотрудника:
        </Typography>
        <EmployeeContainer
          inputName={inputName}
          inputLastName={inputLastName}
          inputAge={inputAge}
          setInputName={setInputName}
          setInputLastName={setInputLastName}
          setInputAge={setInputAge}
          handleOnChange={handleOnChange}
          handleCreateEmployee={handleCreateEmployee}
        />
        <Typography variant="h5" gutterBottom>
          Список сотрудников:
        </Typography>
        <Table columns={columns} data={data} />
      </LoadingOverlay>
    </PageContainer>
  );
});

export default App;
