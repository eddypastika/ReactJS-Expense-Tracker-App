import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expense Found.</h2>
    }

    return (
        <div>
            <ul className="expenses-list">
                {props.items.map((item) => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ExpensesList;