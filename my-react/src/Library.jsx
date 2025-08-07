import { useState, useEffect } from 'react';
import Book from "./Book";

function Library(){
    return (
        <div>
            <Book name="처음 만난 파이썬" total_page="300" color="green" children="파이썬 강의보기" btnTxt="확인"/>
            <Book name="처음 만난 리액트" total_page="400" color="red" children="리액트 강의보기" btnTxt="리액트"/>
            <Book name="처음 만난 AWS" total_page="500" color="yellow" children="AWS 강의보기" btnTxt="확인중"/>
        </div>
    )
}
export default Library;

function Time(){

    const [currentTime, setCurrentTime] = useState(new Date());
    const [isRunning, setIsRunning] = useState(true);
    useEffect(()=>{
        if(isRunning){
            const timer = setInterval(()=>{setCurrentTime(new Date)},1000)
            return (()=>{clearInterval(timer)});
        }
    },[isRunning]);

    function handleStop(){
        setIsRunning(false)
    }
    function handlePlay(){
        setIsRunning(true)
    }

    return (
        <div>
            <h1>안녕! 리액트!</h1>
            <h2>현재 시간 : {currentTime.toLocaleTimeString()}</h2>
            <button type="button" onClick={handleStop}>Stop</button>
            <button type="button" onClick={handlePlay}>Play</button>
        </div>
    );
}