import './Chart.css';
import ChartBar from './ChartBar';
import { Component } from 'react';

class Chart extends Component {
    render() {
        const dataPointValues = this.props.dataPoints.map(elem => elem.value);
        const totalMax = Math.max(...dataPointValues);

        return (
            <div className='chart'>
                {this.props.dataPoints.map(elem => {
                    return <ChartBar key={elem.label}
                        value={elem.value}
                        maxValue={totalMax}
                        label={elem.label} />
                })}
            </div>
        )
    }
}

// const Chart = props => {
//     const dataPointValues = props.dataPoints.map(elem => elem.value);
//     const totalMax = Math.max(...dataPointValues);
//     return (
//         <div className='chart'>
//             {props.dataPoints.map(elem => {
//                 return <ChartBar key={elem.label}
//                     value={elem.value}
//                     maxValue={totalMax}
//                     label={elem.label} />
//             })}
//         </div>
//     )
// }

export default Chart;