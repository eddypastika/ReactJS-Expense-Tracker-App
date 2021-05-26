import React, {useState} from "react"; // we don't need import this in the modern React

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const INITIAL_STATE = [
    {id: "e1", title: "Food", amount: 100.00, date: new Date(2021, 0, 7)},
    {id: "e2", title: "Investment", amount: 1250.87, date: new Date(2020, 11, 6)},
    {id: "e3", title: "Pay Bill", amount: 235.75, date: new Date(2021, 2, 8)}
];

const App = () => {
    const [expenses, setExpenses] = useState(INITIAL_STATE);

    const addExpenseHandler = expense => {
        setExpenses((prevState) => {
            return [expense, ...prevState];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
