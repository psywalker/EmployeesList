export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";
export const REMOVE_ALL_EMPLOYEES = "REMOVE_ALL_EMPLOYEES";
export const CHANGE_OVERLAY_FLAG = "CHANGE_OVERLAY_FLAG";
export const UPDATE_EMPLOYEES_LIST = "UPDATE_EMPLOYEES_LIST";

export const addEmployee = (firstName, lastName, age) => ({
  type: ADD_EMPLOYEE,
  firstName,
  lastName,
  age
});

export const removeEmployee = (dataId) => ({
  type: REMOVE_EMPLOYEE,
  dataId
});

export const removeAllEmployee = () => ({
  type: REMOVE_ALL_EMPLOYEES
});

export const changeOverlayFlag = (isOverlay) => ({
  type: CHANGE_OVERLAY_FLAG,
  isOverlay
});

export const udpateEmployeesList = () => ({
  type: UPDATE_EMPLOYEES_LIST
});
