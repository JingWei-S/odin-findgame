import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";

const Timer = (props) => {
  const {
    foundItems,
    db,
    isRunning,
    setIsRunning,
    elapsedTime,
    setElapsedTime,
    userName,
    upload,
  } = props;

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
      // display the record a name tag
      setTimeout(() => {
        const recordTag = document.querySelector(".enter-name");
        recordTag.style.display = "flex";
      }, 500);
    }
  }, [foundItems]);

  useEffect(() => {
    if (upload) {
      const submitButton = document.getElementById("submit-user");
      //
      (async () => {
        try {
          const response = await addDoc(collection(db, "ranking"), {
            name: userName,
            time: elapsedTime,
          });
          console.log(response);
          submitButton.classList.remove("loading");
          submitButton.disabled = true;
        } catch (error) {
          console.log(error);
          submitButton.classList.remove("loading");
        }
      })();
    }
  }, [upload]);

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
