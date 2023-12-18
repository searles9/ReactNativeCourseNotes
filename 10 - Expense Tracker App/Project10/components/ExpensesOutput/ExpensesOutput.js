import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of pants',
        amount: 22.00,
        date: new Date('2021-11-06')
    },
    {
        id: 'e3',
        description: 'Sunglasses',
        amount: 9.99,
        date: new Date('2022-08-19')
    },
    {
        id: 'e4',
        description: 'Book',
        amount: 19.99,
        date: new Date('2022-02-07')
    }
]

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
            <ExpensesList />
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({})