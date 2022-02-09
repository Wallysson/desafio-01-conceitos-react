import { useEffect, useState } from "react"
import '../styles/timer.scss'

export function Timer() {
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePaused = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="timer-div">
      <div className="timer-div-time">
      <p>{(Math.floor(time / 60000) % 60)}:{(Math.floor(time / 1000) % 60)}:{(Math.floor(time / 10) % 100)}</p>
      </div>

    <button className="btn-play" onClick={handleStart}>Play</button>
    <button onClick={handlePaused}>Stop</button>
    <button onClick={handleReset}>Reset</button>
  
    </div>
  )
}