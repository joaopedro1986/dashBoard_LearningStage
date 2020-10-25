import React, { useState } from 'react'
import * as GoIcons  from 'react-icons/go';
// import Footer from '../Components/Footer'

function Home() {
   
    const [size, setSize] = useState (750);
    const reduceSize = () => setSize(size - 20); 
    const increaseSize = () => setSize(size + 20);
   
  
    return (
        <div className='home'>
            <h1>Teste</h1>
            <GoIcons.GoPrimitiveDot
            size={size}
            color="red"
            />
            
            <button className="buttonSize" onClick={reduceSize}>Reduce Size</button>
            <button className="buttonSize" onClick={increaseSize}>Increase Size</button>
     
      </div>
    )
}

export default Home
