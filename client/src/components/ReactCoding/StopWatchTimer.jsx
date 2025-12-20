import React, { useState, useRef } from 'react';
//import './style.css';

export function StopWatchTimer() {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);
  
  const startTimer = () => {
    if (running) return;
    setRunning(true);
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1000);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setRunning(false);
  };

  const restartTimer = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTimer(0);
  };

  const formatTime = () => {
    const totalSeconds = Math.floor(timer / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>{formatTime()}</h1>
      <button onClick={startTimer}> startTimer </button>
      <button onClick={stopTimer}>stopTimer</button>
      <button onClick={restartTimer}>restartTimer</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}


input:  data = [ [1487799425, 14, 1], 
                 [1487799425, 4,  0],
                 [1487799425, 2,  0],
                 [1487800378, 10, 1],
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  0] ]

output: 1487800378

