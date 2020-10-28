import React, {useContext} from 'react'
import Context from '../store/context';




function Products() {
    const {state} = useContext(Context);
    return (
        <div className='products'>
            <h1>{state.value}</h1>

      </div>
    )
}

export default Products
