import React,{useState} from 'react';
import './App.css'


// import { Container } from './styles';

function App() {
const [num1, setNum1]= useState(0);
const [num2, setNum2]= useState(0);
const [soma, setSoma]= useState(0);
const somar = (num1,num2)=>{
    return setSoma(num1+num2);
}
    
  return(
      <div>    
        <p>Soma de Valores</p>    
        <input className="num1" type="number" onChange={(num1)=>{setNum1(num1.target.valueAsNumber)}}/>
        <input className="num2" type="number" onChange={(num2)=>{setNum2(num2.target.valueAsNumber)}}/>
        <button className="butt" type="submit" onClick={()=>somar(num1,num2)}>+</button>
        <button className="resul">{soma}</button> 
      </div>
  )      
 
}

export default App