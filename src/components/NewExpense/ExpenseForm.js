import './ExpenseForm.css';

import { Component } from 'react';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        }
    }

    titleChangeHandler(event) {
        this.setState({
            enteredTitle: event.target.value
        })
    }

    amountChangeHandler(event) {
        this.setState({
            enteredAmount: event.target.value
        })
    }

    dateChangeHandler(event) {
        this.setState({
            enteredDate: event.target.value
        })
    }

    submitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: this.state.enteredTitle,
            amount: this.state.enteredAmount,
            date: new Date(this.state.enteredDate),
            id: Math.random().toString()
        }
        this.props.takeObj(expenseData);
    }


    render() {
        return (
            <form onSubmit={this.submitHandler.bind(this)}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" onChange={this.titleChangeHandler.bind(this)} value={this.state.enteredTitle} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" min='0.01' step='0.01' value={this.state.enteredAmount} onChange={this.amountChangeHandler.bind(this)} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" min='2021-01-01' max="2023-01-01" value={this.state.enteredDate} onChange={this.dateChangeHandler.bind(this)} />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        )
    }
}

// function ExpenseForm(props) {
//     const [enteredTitle, setEnteredTitle] = useState('');
//     const [enteredAmount, setEnteredAmount] = useState('');
//     const [enteredDate, setEnteredDate] = useState('');

//     const titleChangeHandler = (event) => {
//         // console.log(event)
//         setEnteredTitle(event.target.value);
//         // console.log(enteredTitle)
//     }
//     const amountChangeHandler = (event) => {
//         setEnteredAmount(event.target.value)
//         //     console.log(enteredAmount)
//     }

//     const dateChangeHandler = (event) => {
//         setEnteredDate(event.target.value)
//         //    console.log(enteredDate)
//     }

//     // variants
//     // const  [userInput, setUserInput] = useState({
//     //     enteredTitle:'',
//     //     enteredAmount: '',
//     //     enteredDate: ''
//     // });

//     // const titleChangeHandler =(event)=>{
//     //     // setUserInput({...userInput, enteredTitle: event.target.value})
//     //   setUserInput((prevState)=>{
//     //       return{
//     //           ...prevState, enteredTitle: event.target.value
//     //       }
//     //   })
//     //     console.log(userInput)
//     // }
//     // const amountChangeHandler =(event)=>{

//     //     setUserInput({
//     //         ...userInput,  enteredAmount: event.target.value
//     //     })
//     //     console.log(userInput)
//     // }
//     const submitHandler = (event) => {
//         event.preventDefault();
//         const expenseData = {
//             title: enteredTitle,
//             amount: enteredAmount,
//             date: new Date(enteredDate),
//             id: Math.random().toString()
//         }
//         props.takeObj(expenseData);
//     }

//     return <form onSubmit={submitHandler}>
//         <div className='new-expense__controls'>
//             <div className='new-expense__control'>
//                 <label>Title</label>
//                 <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
//             </div>
//             <div className='new-expense__control'>
//                 <label>Amount</label>
//                 <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
//             </div>
//             <div className='new-expense__control'>
//                 <label>Date</label>
//                 <input type="date" min='2021-01-01' max="2023-01-01" value={enteredDate} onChange={dateChangeHandler} />
//             </div>
//         </div>
//         <div className='new-expense__actions'>
//             <button type='submit'>Add Expense</button>
//         </div>
//     </form>
// }

export default ExpenseForm;
