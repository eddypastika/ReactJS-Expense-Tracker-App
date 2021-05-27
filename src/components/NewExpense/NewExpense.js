import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {
    const [formOpen, setFormOpen] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    };

    const closeFormHandler = () => {
        setFormOpen(false);
    };

    const openFormHandler = () => {
        setFormOpen(true);
    };

    return (
        <div className="new-expense">
            {!formOpen && <button onClick={openFormHandler}>Add Expense</button>}
            {formOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseForm={closeFormHandler}/>}
        </div>
    )
};

export default NewExpense;