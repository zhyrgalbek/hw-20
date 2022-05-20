import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import { Component } from 'react';

class ExpenseItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.text
    }
  }

  clickHandler(){
    this.setState({
      title: 'updated'
    })
  }

  render() {
    return (
      <Card className="expense-item">
        <ExpenseDate date={this.props.date} />
        <div className="expense-item__description">
          <h2>{this.state.title}</h2>
          <div className="expense-item__price">{this.props.price}</div>
        </div>
        <button onClick={this.clickHandler.bind(this)}>change title</button>
      </Card>
    )
  }
}

// function ExpenseItem(props) {

//   const [title, setTitle] = useState(props.text)


//   function clickHandler() {
//     setTitle('updated')
//   }

//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">{props.price}</div>
//       </div>
//       <button onClick={clickHandler}>change title</button>
//     </Card>
//   );
// }

export default ExpenseItem;
