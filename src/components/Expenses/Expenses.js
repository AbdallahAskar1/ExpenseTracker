import "./expenses.css"
import React, { useState } from "react"
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter"
import ExpensesList from "../ExpensesList/ExpensesList"
import ExpensesChart from "./ExpensesChart"
function Expenses(props){
    const [selectedYear,setSelctedYear]= useState('2022')
    const filterChangeHandler=selectedYear=>{
        setSelctedYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });
    
    return (
        <div className="expenses">
            <ExpensesFilter selected={selectedYear} onChangeYear={filterChangeHandler} />  
            <ExpensesChart expenses={filteredExpenses}/>          
            <ExpensesList items={filteredExpenses} />

        </div>
    )
}
export default Expenses;