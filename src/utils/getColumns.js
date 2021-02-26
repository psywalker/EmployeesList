import React from "react";
import { Button } from "@material-ui/core";

export const getColumns = (handleRemoveEmployee, handleRemoveAllEmployee) => [
  {
    minWidth: 178,
    resizable: true,
    Header: "Имя",
    accessor: "firstName"
  },
  {
    minWidth: 177,
    resizable: true,
    Header: "Фамилия",
    accessor: "lastName"
  },
  {
    minWidth: 177,
    resizable: true,
    Header: "Возраст",
    accessor: "age"
  },
  {
    id: "delete",
    accessor: () => "delete",
    width: 130,
    Header: (tableProps) => {
      const { isAllRowsSelected } = tableProps;
      if (isAllRowsSelected) {
        return (
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => {
              handleRemoveAllEmployee({
                toggleAllRowsSelected: tableProps.toggleAllRowsSelected
              });
            }}
          >
            Удалить всё
          </Button>
        );
      }
      return null;
    },
    Cell: (tableProps) => (
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={() => {
          const { index: rowIndex } = tableProps?.row;
          const { isSelected } = tableProps?.row;
          const { isSelected: isSelectedNextRow } =
            tableProps?.rows[rowIndex + 1] || rowIndex;
          const { isAllRowsSelected } = tableProps;
          const { selectedFlatRows } = tableProps;
          const rowsIndexSelected = selectedFlatRows.map((row) => row.index);
          const dataId = tableProps?.data[rowIndex]?.id;

          if (dataId)
            handleRemoveEmployee({
              dataId,
              rowIndex,
              rowsIndexSelected,
              toggleRowSelected: tableProps.toggleRowSelected,
              isSelectedNextRow,
              isSelected,
              isAllRowsSelected
            });
        }}
      >
        Удалить
      </Button>
    )
  }
];
