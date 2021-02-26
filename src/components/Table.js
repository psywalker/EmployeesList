import React from "react";
import { useDispatch } from "react-redux";
import { changeOverlayFlag, udpateEmployeesList } from "../utils/actions";
import { delay } from "../utils/delay";
import {
  useTable,
  useRowSelect,
  useResizeColumns,
  useBlockLayout,
  useSortBy
} from "react-table";
import { Typography, Button, Box } from "@material-ui/core";
import ReorderTwoToneIcon from "@material-ui/icons/ReorderTwoTone";
import { IndeterminateCheckbox } from "./IndeterminateCheckbox";

export const Table = ({ columns, data }) => {
  const dispatch = useDispatch();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows
  } = useTable(
    {
      columns,
      data,
      autoResetSelectedRows: false
    },
    useResizeColumns,
    useBlockLayout,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          width: 50,

          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),

          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          )
        },
        ...columns
      ]);
    },
    useSortBy,
    useRowSelect
  );

  const selectedNames = selectedFlatRows.map((item, index) =>
    index === selectedFlatRows.length - 1
      ? item?.values?.firstName
      : item?.values?.firstName + ", "
  );

  const tbodyPlaceholder = (
    <tr>
      <td className="td-noData">
        <Box className="td-noData__container">
          <Typography
            align="center"
            color="primary"
            display="block"
            variant="h2"
            className="td-noData__title"
            gutterBottom
          >
            Обновите список сотрудников
          </Typography>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={() => {
              dispatch(changeOverlayFlag(true));
              delay(2000).then(() => {
                dispatch(udpateEmployeesList());
                dispatch(changeOverlayFlag(false));
              });
            }}
          >
            Обновить список сотрудников
          </Button>
        </Box>
      </td>
    </tr>
  );
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => {
                let classForCellWithChexbox = !columnIndex
                  ? "cell-with-checkbox"
                  : "";
                classForCellWithChexbox = !data.length
                  ? `${classForCellWithChexbox} data-empty`
                  : classForCellWithChexbox;
                const lastTh = columnIndex === headerGroup.headers.length - 1;

                return (
                  <th
                    {...column.getHeaderProps()}
                    className={classForCellWithChexbox}
                  >
                    {column.resizable && (
                      <div
                        {...column.getResizerProps()}
                        className={`resizer ${
                          column.isResizing ? "isResizing" : ""
                        }`}
                      >
                        <ReorderTwoToneIcon />
                      </div>
                    )}

                    {!lastTh ? (
                      <span
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className="sorted-container"
                      >
                        {column.isSorted
                          ? column.isSortedDesc
                            ? column.render("Header") + " 🔽"
                            : column.render("Header") + " 🔼"
                          : column.render("Header")}
                      </span>
                    ) : (
                      column.render("Header")
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {data.length
            ? rows.map((row) => {
                const { isSelected } = row?.original;
                const classForSelectedRow =
                  isSelected || row.isSelected ? "row-selected" : "";

                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className={classForSelectedRow}>
                    {row.cells.map((cell, cellIndex) => {
                      const classForCellWithChexbox = !cellIndex
                        ? "cell-with-checkbox"
                        : "";
                      return (
                        <td
                          className={classForCellWithChexbox}
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            : tbodyPlaceholder}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">
              {data.length ? (
                <Typography color="secondary">Пользователи:</Typography>
              ) : null}
              <Typography color="primary">{selectedNames}</Typography>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
