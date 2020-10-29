import React, {useContext} from 'react'
import Context from '../store/context';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'





function Products() {
    const {state} = useContext(Context);
    return (
            
           <div>
              <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Zone</th>
                        <th>Number Workers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Unsafe Area</td>
                        <td>{state.unSafe}</td>
                        </tr>
                        <tr>
                        <td>Zone 1</td>
                        <td>{state.safe1}</td>
                        </tr>
                        <tr>
                        <td>Zone 2</td>
                        <td>{state.safe2}</td>
                        </tr>
                    </tbody>
                    </Table>
           </div>
  


            
  
    )
}

export default Products
