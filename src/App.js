import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="App">
      <div className="container">
        <h3>Stopwatch</h3>
        <div className="watchCount">
          <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="styleBtn">
          <button className="btn start" onClick={() => setRunning(true)}>
            Start
          </button>
          <button className="btn stop" onClick={() => setRunning(false)}>
            Stop
          </button>
          <button className="btn reset" onClick={() => setTime(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
