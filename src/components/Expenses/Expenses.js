import React, {useState} from "react"; // we don't need import this in the modern React
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import './Expenses.css';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2021");
    const getSelectedYearFilterHandler = selectedYear => {
        setSelectedYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    })

    let expensesContent = <p>No Expense Found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.length > 0 && filteredExpenses.map((item) => (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        ))
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onGetSelectedYearFilter={getSelectedYearFilterHandler}/>
            {/*{props.items.map(item =>*/}
            {/*    <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>*/}
            {/*)}*/}
            {expensesContent}
        </Card>
    )
};

export default Expenses;