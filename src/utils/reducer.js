import { initialStore } from "./initialStore";
import { nanoid } from "nanoid";
import { createListEmployees } from "./createListEmployees";

const employees = (state = initialStore, action = {}) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      const { firstName, lastName, age } = action;
      return {
        ...state,
        employees: [
          ...state.employees,
          {
            id: nanoid(),
            firstName,
            lastName,
            age
          }
        ]
      };
    case "REMOVE_EMPLOYEE":
      const updateEmployess = [
        ...state.employees.filter((employee) => employee.id !== action.dataId)
      ];
      return {
        ...state,
        employees: updateEmployess
      };
    case "REMOVE_ALL_EMPLOYEES":
      return {
        ...state,
        employees: []
      };
    case "UPDATE_EMPLOYEES_LIST":
      return {
        ...state,
        employees: createListEmployees()
      };
    case "CHANGE_OVERLAY_FLAG":
      return {
        ...state,
        isOverlay: action.isOverlay
      };
    default:
      return state;
  }
};

export default employees;
