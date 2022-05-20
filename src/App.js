import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { Component } from 'react';

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      arr: expenses
    }
  }

  addObj(obj){
    this.setState((prevState)=>{
      return {
        arr: [...prevState.arr, obj]
      }
    })
  }

  render() {
    return (
      <div className="App">
        <NewExpense addObj={this.addObj.bind(this)} />
        <Expenses expenses={this.state.arr} />
      </div>
    )
  }
}

// function App() {
//   const [arr, setArr] = useState(expenses);

//   function addObj(obj) {
//     setArr((prevItem) => {
//       return [...prevItem, obj];
//     })
//   }

//   return (
//     <div className="App">
//       <NewExpense addObj={addObj} />
//       <Expenses expenses={arr} />
//     </div>
//   );
// }

export default App;

//ReactDom
