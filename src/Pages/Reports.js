
import React, { PureComponent, useContext } from 'react';
import {PieChart, Pie, Tooltip} from 'recharts';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
import Context from '../store/context';
import {RadialBarChart, RadialBar } from 'recharts';
import DataFetching from '../Components/DataFetching'

function Reports() {

    const {state} = useContext(Context);

    const data = [
        { name:'UnsafeArea', value: state.unSafe},
        { name: 'Area 1', value: state.safe1},
        { name: 'Area 2', value: state.safe2}
    ]


    const data2 = [
        {
          "name": "No Safe Area",
          "uv": state.unSafe / state.notChangeState * 100,
          "pv": 2400,
          "fill": "#8884d8"
        },
        {
          "name": "Area 1",
          "uv": state.safe1 / state.notChangeState * 100,
          "pv": 4567,
          "fill": "#83a6ed"
        },
        {
          "name": "Area 2",
          "uv": state.safe2/ state.notChangeState * 100,
          "pv": 1398,
          "fill": "#8dd1e1"
        }
      ]
        

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    
      
    return (
        <div>

    <DataFetching />  
            
            <PieChart width={400} height={400}>
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
        <Tooltip />
      </PieChart>

      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>

      <RadialBarChart 
                width={730} 
                height={250} 
                innerRadius="10%" 
                outerRadius="80%" 
                data={data2} 
                startAngle={180} 
                endAngle={0}
                >
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />
                </RadialBarChart>

          
        </div>
        
      
     
    )
}

export default Reports
