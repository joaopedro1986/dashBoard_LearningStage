import React, { useState, useEffect } from 'react'
import * as GoIcons  from 'react-icons/go';
// import Footer from '../Components/Footer'

function Home() {
   
    const [size, setSize] = useState (750);
    const reduceSize = () => setSize(size - 20); 

    const [size2, setSize2] = useState (150);
    const increaseSize2 = () => setSize2(size2 + 20);

    const [size3, setSize3] = useState (150);
    const increaseSize3 = () => setSize3(size3 + 20);

   useEffect (()=> {
        
        return () =>  {
               console.log("size1: " + size)
               console.log("size2: " + size2)
        }
         

    },
    [size, size2]);

   

    
    function reset () {
        setSize(750)
        setSize2(150)
        setSize3(150)


    }
  
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
            size={size3}
            color="green"
            />
            <button className="buttonSize" onClick={() => {
                reduceSize()
                increaseSize2()
            }}  >Move to Area 1</button>
             <button className="buttonSize" onClick={() => {
                reduceSize()
                increaseSize3()
            }}  >Move to Area 2</button>
            <button className='buttonSize' onClick={reset}>
                Reset
            </button>

            <h1 className='box1'>
                {size < 50 ? 'Safe' : 'Not Safe'}
            </h1>
          
        
         
     
      </div>
      </>
    )
}

export default Home
