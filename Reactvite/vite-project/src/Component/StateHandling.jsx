import React ,{useState}from 'react'

function StateHandling() {
    const[counter,setCounter]=useState(20);
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(255);
    function increment(){
        setCounter(counter+10);
    }
    function changeBGColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
  return (
    <div style={{ backgroundColor:`rgb(${red}, ${green}, ${blue})`, border:'2px solid black', height:'100px', padding:'20px', width:'300px', marginLeft:'200px'}}>
        <h2 style={{color:'red'}}>Counter App</h2>
        <h2>Counter={counter}</h2>
        <button onClick={increment}>increaseCounter</button>
        <button onClick={() => setCounter(counter - 10)}>decreaseCounter</button>
        <button onClick={changeBGColor}>Change BG Color</button>
    </div>
  )
}
export default StateHandling