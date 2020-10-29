import React, {useContext} from 'react';
import Context from '../store/context';


function Reports() {
    const {state} = useContext(Context);

    return (
    
        <div className='reports'>
            <h1>{state.safe}</h1>  
        </div>
     
     
    )
}

export default Reports
