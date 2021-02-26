import { nanoid } from "nanoid";

const getRandomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const firstNames = [
  "Иосиф",
  "Николай",
  "Самуил",
  "Николай",
  "Владимир",
  "Сергей",
  "Василий",
  "Максимилиан",
  "Михаил",
  "Игорь",
  "Михаил",
  "Александр",
  "Лев",
  "Анна",
  "Антон",
  "Сергей"
];
export const lastNames = [
  "Бродский",
  "Гумилёв",
  "Маршак",
  "Рерих",
  "Даль",
  "Довлатов",
  "Шукшин",
  "Волошин",
  "Зощенко",
  "Северянин",
  "Лермонтов",
  "Пушкин",
  "Толстой",
  "Ахматова",
  "Чехов",
  "Есенин"
];
export const createListEmployees = () => {
  const employees = [];
  firstNames.forEach((name, i) => {
    const employee = {
      id: nanoid(),
      firstName: name,
      lastName: lastNames[i],
      age: getRandomInRange(30, 100)
    };
    employees.push(employee);
  });
  return employees;
};
