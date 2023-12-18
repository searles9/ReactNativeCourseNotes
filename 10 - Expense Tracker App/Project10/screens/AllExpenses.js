import { View, StyleSheet, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
  return (
    <View>
      <ExpensesOutput expensesPeriod="Total"/>
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({});
