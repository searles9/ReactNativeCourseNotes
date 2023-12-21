import axios from "axios";

export function storeExpense(expenseData) {
  console.log("Adding")
  axios.post(
    "https://reactnativecourse-0001-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
