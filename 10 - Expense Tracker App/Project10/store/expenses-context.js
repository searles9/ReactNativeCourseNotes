import { createContext, useReducer, useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of pants",
    amount: 22.0,
    date: new Date("2021-11-06"),
  },
  {
    id: "e3",
    description: "Sunglasses",
    amount: 9.99,
    date: new Date("2022-08-19"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 19.99,
    date: new Date("2022-02-07"),
  },
  {
    id: "e5",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e6",
    description: "A pair of pants",
    amount: 22.0,
    date: new Date("2021-11-06"),
  },
  {
    id: "e7",
    description: "Sunglasses",
    amount: 9.99,
    date: new Date("2022-08-19"),
  },
  {
    id: "e8",
    description: "Book",
    amount: 19.99,
    date: new Date("2022-02-07"),
  },
  {
    id: "e9",
    description: "Sunglasses",
    amount: 9.99,
    date: new Date("2022-08-19"),
  },
  {
    id: "e10",
    description: "Book",
    amount: 19.99,
    date: new Date("2022-02-07"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: ({ id }) => {},
  updateExpense: ({ id, description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updateableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updateableExpense[updateableExpense] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpensesContextProvider value={value}>{children}</ExpensesContextProvider>
  );
}

export default ExpensesContextProvider;
