import React from "react"; // we don't need import this in the modern React
import Expenses from "./components/Expenses";

function App() {
    const expenses = [
        {id: "e1", title: "Food", amount: 100.00, date: new Date(2021, 0, 7)},
        {id: "e2", title: "Investment", amount: 1250.87, date: new Date(2020, 11, 6)},
        {id: "e3", title: "Pay Bill", amount: 235.75, date: new Date(2021, 2, 8)}
    ];
    return (
        <div>
            <h2>My Expense Tracker</h2>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
