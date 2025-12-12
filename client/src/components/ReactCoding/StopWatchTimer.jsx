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



