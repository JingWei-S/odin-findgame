import { useEffect, useState } from "react";

const Timer = (props) => {
  const { foundItems } = props;
  const [isRunning, setIsRunning] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalID;

    if (isRunning) {
      intervalID = setInterval(() => {
        setElapsedTime(elapsedTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalID);
    };
  });

  useEffect(() => {
    // this is to stop the time
    if (foundItems === 3) {
      setIsRunning(false);
    // TODO: add a function to send the data to backend
    }
  }, [foundItems]);
  //   const stopTimer = () => {
  //     setIsRunning(false);
  //   };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      <p>{formatTime(elapsedTime)}</p>
    </div>
  );
};

export default Timer;
