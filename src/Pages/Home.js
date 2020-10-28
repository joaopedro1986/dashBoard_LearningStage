import React, { useState, useEffect } from 'react'
import * as GoIcons  from 'react-icons/go';
// import Footer from '../Components/Footer'

function Home() {

    const originalSize1 = 400;
    const originalSize2 = 100;
    const reduceCircle = 20;
   
    const [size, setSize] = useState (originalSize1);
    const reduceSize = () => setSize(size - reduceCircle); 

    const [size2, setSize2] = useState (originalSize2);
    const increaseSize2 = () => setSize2(size2 + reduceCircle);

    const [size3, setSize3] = useState (originalSize2);
    const increaseSize3 = () => setSize3(size3 + reduceCircle);

   useEffect (()=> {
        
        return () =>  {
               console.log("size1: " + size)
               console.log("size2: " + size2)
        }
         

    },
    [size, size2]);

   

    
    function reset () {
        setSize(originalSize1)
        setSize2(originalSize2)
        setSize3(originalSize2)


    }
  
    return (
        <>
        <div className='headerHome'>´
            <div>
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
            </div>
           
            <h1 className='box1'>
               Status: {size < 50 ? 'Safe' : 'Not Safe'}
            </h1>
        </div>

        <div className = 'textArea'>
                <h3>Unsafe Zone</h3>
                <h3>Zone 1</h3>
                <h3>Zone 2</h3>   
                </div>
           
        <div className='home'>
              
        
                    <div className='circle-1'>
                    
                    <GoIcons.GoPrimitiveDot
                    size={size}
                    color="red"
                    />
                    </div>
                    
                <div className='circle-2'>
                    
                    <GoIcons.GoPrimitiveDot
                    size={size2}
                    color="blue"
                    />
                </div>
                   
                <div className='circle-3'>
                    <GoIcons.GoPrimitiveDot
                    size={size3}
                    color="green"
                     />
                </div>
           
       
           
            
           

          
          
        
         
     
      </div>
      </>
    )
}

export default Home
