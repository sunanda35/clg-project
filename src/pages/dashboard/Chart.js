import React from 'react';
import {Line} from 'react-chartjs-2'
import './Chart.css'

function Chart() {
    const data = {
        labels:['jan','feb','mar','april','may','jun','july','aug','sep','oct'],
        datasets:[
            {
                label : 'Total BookMark',
                data:[6,9,5,8,3,5,7,4,9,2],
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
            }
        ]
    }
    
    return (
        <div className="chart">
            <Line data={data} options={{
            title:{
              display:true,
              text:'Average Vist In WEBSITES',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }} width={600} height={250} display={'bottom'}/>
          </div>
    )
}


export default Chart;