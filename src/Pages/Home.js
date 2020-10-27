import React, { useState, useEffect } from 'react'
import * as GoIcons  from 'react-icons/go';
// import Footer from '../Components/Footer'

function Home() {
   
    const [size, setSize] = useState (750);
    const reduceSize = () => setSize(size - 20); 
    const increaseSize = () => setSize(size + 20);

    const [size2, setSize2] = useState (150);
     const reduceSize2 = () => setSize2(size2 - 20); 
    const increaseSize2 = () => setSize2(size2 + 20);

   useEffect (()=> {
        
        return () =>  {
               console.log("size1: " + size)
            console.log("size2: " + size2)
        }
         

    },
    [size, size2]);

   

    
   
  
    return (
        <>
        <div className='home'>
            <GoIcons.GoPrimitiveDot
            size={size}
            color="red"
            />
            <GoIcons.GoPrimitiveDot
            size={size2}
            color="blue"
            />
            <GoIcons.GoPrimitiveDot
            size={size2}
            color="green"
            />
            <button className="buttonSize" onClick={() => {
                reduceSize()
                increaseSize2()
            }}  >Move to Safe Area</button>
            <button className="buttonSize" onClick={() => {
                reduceSize2()
                increaseSize()
            }}  >Remove from Safe Area</button>
        
         
     
      </div>
      </>
    )
}

export default Home
