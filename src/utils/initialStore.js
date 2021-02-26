import { createListEmployees } from "./createListEmployees";

export const initialStore = {
  employees: createListEmployees(),
  isOverlay: false
};
