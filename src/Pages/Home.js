import React, { useState } from 'react'
import * as GoIcons  from 'react-icons/go';

function Home() {
   
    const [size, setSize] = useState (750);
    const reduceSize = () => setSize(size - 20); 
  
    return (
        <div className='home'>
            <h1>Teste</h1>
            
            <GoIcons.GoPrimitiveDot
            size={size}
            color="red"
            />
            
            <button className="buttonSize" onClick={reduceSize}>Size</button>
      </div>
    )
}

export default Home
