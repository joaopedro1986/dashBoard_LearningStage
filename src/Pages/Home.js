import React, { useState, useEffect, useContext } from 'react'
import * as GoIcons  from 'react-icons/go';
// import Footer from '../Components/Footer'
import Card from 'react-bootstrap/Card'
import Context from '../store/context';
import Table from 'react-bootstrap/Table'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Alert from 'react-bootstrap/Alert'
import {PieChart, Pie, Tooltip} from 'recharts';
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap';


function Home() {

    const {state} = useContext(Context);
   
    const originalSize1 = 200;
    const originalSize2 = 0;
    const reduceCircle = 20;


   
    const [size, setSize] = useState (state.unSafe/5);
    const reduceSize = () => setSize(size - reduceCircle); 

    const [size2, setSize2] = useState ((state.safe1/5));
    const increaseSize2 = () => setSize2(size2 + reduceCircle);

    const [size3, setSize3] = useState (state.safe2/5 );
    const increaseSize3 = () => setSize3(size3 + reduceCircle);

    


    const messageSuccess = 'All Workers Are Safe'
    const messageError = state.unSafe +' Workers Are Outside The Security Zone'

    const data = [
        { name:'UnsafeArea', value: state.unSafe},
        { name: 'Area 1', value: state.safe1},
        { name: 'Area 2', value: state.safe2}
    ]


    

    

   
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
        
        console.log(state.listEvent)
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

  const  viewData = (props) => {
      state.listEvent = props
      
       //window.open('/Workers','data','height=550,width=400');

        
    }
    



    return (

        

        <div className='home'>
       
        <ProgressBar animated now={size / 2} />
        <div className='buttonHome'>´
             
                <button className={state.buttonShow ? 'buttonControl-hide' : 'buttonControl'} onClick={(e) => {
                e.preventDefault()
                printData()
                reduceSize()
                increaseSize2()
                decreseSafety()
                increaseSafety1()
           
            }}  >Move to Area 1</button>
             <button className={state.buttonShow  ? 'buttonControl-hide' : 'buttonControl'}  onClick={(e) => {
                e.preventDefault()
                reduceSize()
                increaseSize3()
                decreseSafety()
                increaseSafety2()
                
               
                

            }}  >Move to Area 2</button>
            <button className='buttonReset' onClick={(e) =>{
                  e.preventDefault()
                  resetProps()  
                  
            }}>
                Reset
            </button>
          
           
           
        </div>
      

        <Alert className='alert' variant={state.buttonShow ? 
        "success ": 'danger'}>
         <Alert.Heading>Messge From System</Alert.Heading>
         <p> {state.buttonShow ? messageSuccess : messageError}
  </p>
  <hr />

</Alert>


     
        
              
      <div className='circleCards'>
          
        <Card className="card1"  onClick={(e) => {
            e.preventDefault()
            viewData(0)
        }}>
        
             <Card.Body>
            <Card.Title>
                Unsafe Zone
                <br />
                <p>Workers: {state.unSafe} / {state.notChangeState}</p>
                </Card.Title>
                <Link to='/Workers'>
            
                <div className='circle-1'>
                        
                        <GoIcons.GoPrimitiveDot
                        size={size + 40}
                        color="red"
                        />
                </div>
                </Link>
        </Card.Body>
      
            
        </Card>

                    
        <Card className="card1"  onClick={(e) => {
            e.preventDefault()
            viewData(1)
        }}>
     
             <Card.Body>
            <Card.Title>
                Zone 1
                <br />
                <p> Workers: {state.safe1}</p>
               
                </Card.Title>
                   <Link to='/Workers'>
                        <div className='circle-2'>
                    
                         <GoIcons.GoPrimitiveDot
                         size={size2 + 40}
                          color="blue"
                    />
                </div>
               
                   </Link>
                 </Card.Body> 
         
        </Card>
        <Card className="card1" onClick={(e) => {
            e.preventDefault()
            viewData(2)
        }}>
       
             <Card.Body>
            <Card.Title>
                Zone 2 
                <br />
                <p>Workers: {state.safe2}</p>
               
                </Card.Title>  
                <Link to='/Workers'>     
                    <div className='circle-3'>
                             <GoIcons.GoPrimitiveDot
                              size={size3 + 40}
                              color="green"
                     />
                    </div>
                </Link>
                   
                     
                </Card.Body> 
               
                
        </Card>

        
    
      </div>  
    

        
 
      
            
           

   
        
         
     
      </div>
      
    
    )
}

export default Home
