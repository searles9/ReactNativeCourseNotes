import { View, StyleSheet, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpenses() {
  return (
    <View>
      <Text>Recent Expenses Screen!</Text>
      <ExpensesOutput expensesPeriod="Last 7 Days"/>
    </View>
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({});
