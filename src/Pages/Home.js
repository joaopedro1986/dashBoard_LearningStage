import React, { useState, useEffect, useContext } from 'react'
import * as GoIcons  from 'react-icons/go';
// import Footer from '../Components/Footer'
import Card from 'react-bootstrap/Card'
import Context from '../store/context';
import Table from 'react-bootstrap/Table'


function Home() {

    const {state} = useContext(Context);
   
    const originalSize1 = 500;
    const originalSize2 = 100;
    const reduceCircle = 40;


   
    const [size, setSize] = useState (state.unSafe/2);
    const reduceSize = () => setSize(size - reduceCircle); 

    const [size2, setSize2] = useState (state.safe1/2);
    const increaseSize2 = () => setSize2(size2 + reduceCircle);

    const [size3, setSize3] = useState (state.safe2/2);
    const increaseSize3 = () => setSize3(size3 + reduceCircle);

   

    

    

   
/*
   useEffect (()=> {

        return () =>  {
            state.buttonShow = true;
         }
         

    },
    [safe]);
    */

    function decreseSafety() {
        
        state.unSafe -= 100;
        if (state.unSafe <= 50) {
            state.buttonShow = !state.buttonShow;
        }
        
       
        
    }

    function increaseSafety1() {
        
        state.safe1 += 100;
    }

    function increaseSafety2() {
      
        state.safe2 += 100;
    }

    function printData() {
        console.log(size)
        console.log(state.buttonShow)
    }

    function resetProps(){
        setSize(originalSize1)
        setSize2(originalSize2)
        setSize3(originalSize2)
        state.unSafe = state.notChangeState;
        state.safe1 = 0;
        state.safe2 = 0;
        state.buttonShow = false;
    }



    return (

        <>
       
        <div className='headerHome'>´
            <div>
                <button className={state.buttonShow ? 'buttonControl-hide' : 'buttonControl'} onClick={(e) => {
                e.preventDefault()
                printData()
                reduceSize()
                increaseSize2()
                decreseSafety()
                increaseSafety1()
                printData()
           
            }}  >Move to Area 1</button>
             <button className={state.buttonShow  ? 'buttonControl-hide' : 'buttonControl'}  onClick={(e) => {
                e.preventDefault()
                reduceSize()
                increaseSize3()
                decreseSafety()
                increaseSafety2()
                
                printData()
            }}  >Move to Area 2</button>
            <button className='buttonReset' onClick={(e) =>{
                  e.preventDefault()
                  resetProps()  
                
                  printData()
            }}>
                Reset
            </button>
            </div>
           
            <h1 className={state.buttonShow  ? 'box2' : 'box1'}>
               Status: {state.buttonShow  ? 'Safe' : 'Not Safe'}
            </h1>
        </div>

     
        <div className='home'>
              
        
        <Card className="card1">
             <Card.Body>
            <Card.Title>
                Unsafe Zone
                <br />
                <p>Workers: {state.unSafe} / {state.notChangeState}</p>
                </Card.Title>
            
                <div className='circle-1'>
                        
                        <GoIcons.GoPrimitiveDot
                        size={size}
                        color="red"
                        />
                </div>
        </Card.Body>
        </Card>
                    
        <Card className="card1">
             <Card.Body>
            <Card.Title>
                Zone 1
                <br />
                <p> Workers: {state.safe1}</p>
                </Card.Title>
                <div className='circle-2'>
                    
                    <GoIcons.GoPrimitiveDot
                    size={size2}
                    color="blue"
                    />
                </div>
                </Card.Body>
        </Card>
        <Card className="card1">
             <Card.Body>
            <Card.Title>
                Zone 2 
                <br />
                <p>Workers: {state.safe2}</p>
                </Card.Title>       
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
