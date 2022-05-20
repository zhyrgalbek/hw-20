import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import FilterExpense from './FIlterExpense';
import ExpensesChart from './ExpensesChart';
import { Component } from 'react';

class Expenses extends Component {
  constructor(props){
    super(props);
    this.state = {
      year: "2022"
    }
  }

  takeYear(year){
    this.setState({
      year: year
    })
  }

  render() {

    const filteredElems = this.props.expenses.filter(elem => {
      return elem.date.getFullYear().toString() === this.state.year;
    });

    return (
      <Card className="expenses">
        <FilterExpense takeYear={this.takeYear.bind(this)} value={this.state.year} />
        <ExpensesChart expense={filteredElems} />
        {
          filteredElems.length === 0 ? <p>No found</p> :
            filteredElems.map(elem => {
              return <ExpenseItem date={elem.date} text={elem.title} price={elem.amount} key={elem.id} />
            })
        }
      </Card>
    )
  }
}



// function Expenses(props) {
//   const [year, setYear] = useState("2022");

//   function takeYear(year) {
//     setYear(year);
//   }

//   const filteredElems = props.expenses.filter(elem => {
//     if (elem.date.getFullYear() == year) {
//       return elem;
//     }
//   })

//   return (
//     <Card className="expenses">
//       <FilterExpense takeYear={takeYear} value={year} />
//       <ExpensesChart expense={filteredElems} />
//       {
//         filteredElems.length == 0 ? <p>No found</p> :
//           filteredElems.map(elem => {
//             return <ExpenseItem date={elem.date} text={elem.title} price={elem.amount} key={elem.id} />
//           })
//       }
//     </Card>
//   )

// }

export default Expenses;