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

    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onGetSelectedYearFilter={getSelectedYearFilterHandler}/>
            {props.items.map(item =>
                <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
            )}
        </Card>
    )
};

export default Expenses;