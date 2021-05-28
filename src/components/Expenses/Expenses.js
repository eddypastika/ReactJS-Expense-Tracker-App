import React, {useState} from "react"; // we don't need import this in the modern React
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import './Expenses.css';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2021");
    const getSelectedYearFilterHandler = selectedYear => {
        setSelectedYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onGetSelectedYearFilter={getSelectedYearFilterHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
};

export default Expenses;