import React, { useState, useEffect, useContext } from 'react'
import * as GoIcons  from 'react-icons/go';
// import Footer from '../Components/Footer'
import Card from 'react-bootstrap/Card'
import Context from '../store/context';
import Table from 'react-bootstrap/Table'


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

    const {state} = useContext(Context);

   

   useEffect (()=> {
     //   state.safe += 10;
       // state.unsafe -= 10;
        return () =>  {
              console.log('Teste')
         }
         

    },
    [size]);

    function decreseSafety() {
        state.unSafe -= 100;
    }

    function increaseSafety1() {
        state.safe1 += 100;
    }

    function increaseSafety2() {
        state.safe2 += 100;
    }




    
  
    
    function reset () {
        setSize(originalSize1)
        setSize2(originalSize2)
        setSize3(originalSize2)
        state.unSafe = 1000;
        state.safe1 = 0;
        state.safe2 = 0;
 }
  



    return (

        <>
       
        <div className='headerHome'>´
            <div>
                <button className="buttonSize" onClick={() => {
                reduceSize()
                increaseSize2()
                decreseSafety()
                increaseSafety1()
           
            }}  >Move to Area 1</button>
             <button className="buttonSize" onClick={() => {
                reduceSize()
                increaseSize3()
                increaseSafety2()
            }}  >Move to Area 2</button>
            <button className='buttonSize' onClick={reset}>
                Reset
            </button>
            </div>
           
            <h1 className='box1'>
               Status: {size < 50 ? 'Safe' : 'Not Safe'}
            </h1>
        </div>

     
        <div className='home'>
              
        
        <Card style={{ width: '18rem' }}>
             <Card.Body>
            <Card.Title>Unsafe Zone</Card.Title>
            
                <div className='circle-1'>
                        
                        <GoIcons.GoPrimitiveDot
                        size={size}
                        color="red"
                        />
                </div>
        </Card.Body>
        </Card>
                    
        <Card style={{ width: '18rem' }}>
             <Card.Body>
            <Card.Title>Zone 1</Card.Title>
                <div className='circle-2'>
                    
                    <GoIcons.GoPrimitiveDot
                    size={size2}
                    color="blue"
                    />
                </div>
                </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
             <Card.Body>
            <Card.Title>Zone 2</Card.Title>       
                <div className='circle-3'>
                    <GoIcons.GoPrimitiveDot
                    size={size3}
                    color="green"
                     />
                </div>
                </Card.Body>
        </Card>

        
 
           
            
           

          
          
        
         
     
      </div>
      
      </>
    )
}

export default Home
