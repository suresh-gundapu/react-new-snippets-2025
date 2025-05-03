import { useEffect, useState } from "react";

let TimerComp = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let interVal = setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearInterval(interVal);
    };
  }, []);
  return (
    <>
      <div className="card m-auto">
        <div className="card-header bg-susccess">
          <h3>Timer: {count}</h3>
        </div>
      </div>
    </>
  );
};

export default TimerComp;
