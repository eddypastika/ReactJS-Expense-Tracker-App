import React from "react"; // we don't need import this in the modern React

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expenses = [
        {id: "e1", title: "Food", amount: 100.00, date: new Date(2021, 0, 7)},
        {id: "e2", title: "Investment", amount: 1250.87, date: new Date(2020, 11, 6)},
        {id: "e3", title: "Pay Bill", amount: 235.75, date: new Date(2021, 2, 8)}
    ];

    const addExpenseHandler = expense => {
        console.log("App js");
        console.log(expense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
