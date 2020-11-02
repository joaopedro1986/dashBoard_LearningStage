
import React, {useContext} from 'react'
import './List.css'
import Context from '../store/context';

import { WorkerData} from './WorkersData'
import { NavItem } from 'react-bootstrap';



  

function List () {

  

    
   


    const {state} = useContext(Context);

    const areaList = state.listEvent == 0 ? 'Unsafe': state.listEvent

    
    return(
        <div>

        
        <h1>Workers on Area: {areaList}</h1>
        <table class="content-table">
             <thead>
                 <tr>
                 <th>Name</th>
                 </tr>
             </thead>
             <tbody>
                 <tr class= {state.listEvent == 0 ?  "danger-row": "active-row"}>
                {
                    WorkerData.filter(person => person.area == state.listEvent).map(filteredPerson => (
                        <li>
                            {filteredPerson.name}
                        </li>
                    ))

                }

               
                  </tr>
                  


                
             </tbody>
             </table>
        
    </div>
    )
}

export default List