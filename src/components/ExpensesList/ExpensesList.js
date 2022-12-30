import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "../Expenses/Expense";
const ExpensesList = props =>{
    

    if (props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expense</h2>;
    }
       return (
        
        <ul className="expenses-list">

         {props.items.map((expense) =>( 
            <ExpenseItem 
            key={expense.id.toString()}
            title={expense.title}
            price={expense.amount}
            date={expense.date}
            />))};
            </ul>)

}

export default ExpensesList;