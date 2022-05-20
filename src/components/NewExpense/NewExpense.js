import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card.js';
import { Component } from 'react';

class NewExpense extends Component{
    takeObj(obj){
        this.props.addObj(obj);
    }

    render(){
        return <Card className="new-expense">
            <ExpenseForm takeObj={this.takeObj.bind(this)} />
        </Card>
    }
}

// function NewExpense(props){

//     function takeObj(obj){
//         props.addObj(obj);
//     }

//     return <Card className='new-expense'>
//         <ExpenseForm takeObj={takeObj} />
//     </Card>
// }

export default NewExpense;
