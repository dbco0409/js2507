import { useState, useEffect } from 'react';
import Library from "./Library";
import './App.css'

function App() {
  return (
    <>
      <div>
         <Time />
         <Library />
      </div>
    </>
  )

}

function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  let timer; 
  useEffect(()=>{
    if(isRunning){
      timer = setInterval(()=>{
        setCurrentTime(new Date())
      },1000);
    }
    return (()=>{
      clearInterval(timer)
    })
  },[isRunning]);
  function handlePlay(){
    setIsRunning(true);
  }
  function handleStop(){
    setIsRunning(false);
  }

  return (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재시간 : {currentTime.toLocaleTimeString()}</h2>
      <button type="button" onClick={handleStop}>Stop</button>
      <button type="button" onClick={handlePlay}>Play</button>
      <hr/>
    </div>
  )
}




export default App
