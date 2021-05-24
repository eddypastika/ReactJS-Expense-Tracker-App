import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {id: "e1", title: "Food", amount: 100.00, date: new Date(2021, 0, 7)},
        {id: "e2", title: "Investment", amount: 1250.87, date: new Date(2020, 11, 6)},
        {id: "e3", title: "Pay Bill", amount: 235.75, date: new Date(2021, 2, 8)}
    ];
    return (
        <div>
            <h2>Hello!</h2>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
        </div>
    );
}

export default App;
