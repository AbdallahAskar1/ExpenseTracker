import React from "react";
import Chart from '../Chart/Chart';

const ExpenseChart =props => {
    const chartDataPoints=[
        {label:"jan",value:0},
        {label:"feb",value:0},
        {label:"mar",value:0},
        {label:"apr",value:0},
        {label:"jan",value:0},
        {label:"jan",value:0},
        {label:"jan",value:0},
        {label:"jan",value:0}
    ]

    for (const expense of props.expenses){
        const expenseMonth =expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart  dataPoints={chartDataPoints}/>
}
export default ExpenseChart;