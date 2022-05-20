import Chart from "../chart/Chart"
import { Component } from "react";

class ExpensesChart extends Component{
    render(){
        const chartDatePoinst = [
            {label: 'Jan', value: 0},
            {label: 'Feb', value: 0},
            {label: 'Mar', value: 0},
            {label: 'Apr', value: 0},
            {label: 'May', value: 0},
            {label: 'Jun', value: 0},
            {label: 'Jul', value: 0},
            {label: 'Aug', value: 0},
            {label: 'Sep', value: 0},
            {label: 'Oct', value: 0},
            {label: 'Nov', value: 0},
            {label: 'Dec', value: 0},
        ]

        for(const item of this.props.expense){
            const expenseMonth = item.date.getMonth();
            chartDatePoinst[expenseMonth].value += item.amount;
            // console.log(expenseMonth);
        }

        return <Chart dataPoints={chartDatePoinst} />;
    }
}

// const ExpensesChart = props=>{
//     const chartDatePoinst = [
//         {label: 'Jan', value: 0},
//         {label: 'Feb', value: 0},
//         {label: 'Mar', value: 0},
//         {label: 'Apr', value: 0},
//         {label: 'May', value: 0},
//         {label: 'Jun', value: 0},
//         {label: 'Jul', value: 0},
//         {label: 'Aug', value: 0},
//         {label: 'Sep', value: 0},
//         {label: 'Oct', value: 0},
//         {label: 'Nov', value: 0},
//         {label: 'Dec', value: 0},
//     ]
//     for(const item of props.expense){
//         const expenseMonth = item.date.getMonth();
//         chartDatePoinst[expenseMonth].value += item.amount;
//         // console.log(expenseMonth);
//     }
//     return <Chart dataPoints={chartDatePoinst} />;
// }

export default ExpensesChart;