import './FilterExpense.css';
import { Component } from 'react';

class FilterExpense extends Component {

    selectChange(e){
        this.props.takeYear(e.target.value);
    }

    render() {
        return (
            <div className="expenses-filter">
                <div className="expenses-filter__control">
                    <label>Filter By year</label>
                    <select value={this.props.value} onChange={this.selectChange.bind(this)}>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
            </div>
        )
    }
}


// function FilterExpense(props) {

//     function selectChange(e) {
//         props.takeYear(e.target.value);
//     }

//     return (<div className="expenses-filter">
//         <div className="expenses-filter__control">
//             <label>Filter By year</label>
//             <select value={props.value} onChange={selectChange}>
//                 <option value="2019">2019</option>
//                 <option value="2020">2020</option>
//                 <option value="2021">2021</option>
//                 <option value="2022">2022</option>
//             </select>
//         </div>
//     </div>)
// }

export default FilterExpense;