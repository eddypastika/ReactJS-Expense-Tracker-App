import React from "react"; // we don't need import this in the modern React
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.items.map(item =>
                <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>
            )}
        </Card>
    )
}

export default Expenses;