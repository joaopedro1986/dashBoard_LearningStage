
import React, {useContext} from 'react'
import './List.css'
import Context from '../store/context';

import { WorkerData} from './WorkersData'



  

function List () {

   

    const {state} = useContext(Context);

    const areaList = state.listEvent == 0 ? 'UnSafeZone': state.listEvent
    
    return(
        <div>

      
        <h1>Workers on Area: {areaList}</h1>
        <table class="content-table">
             <thead>
                 <tr>
                 <th>Name</th>
                 <th>Number of Workers: {state.worker.lenght}</th>
                 </tr>
             </thead>
             <tbody>
                 <tr class="danger-row">
                {WorkerData.map((item, index) => {
                    return(
                        <li key={index}>
                            <td className={item.area >0 ? 'safe' : 'notsafe'}>
                            {item.area == state.listEvent ? item.name : ''}
                      </td>
                       
                    </li>
                    )
                })}
                  </tr>
                  


                
             </tbody>
             </table>
    </div>
    )
}

export default List