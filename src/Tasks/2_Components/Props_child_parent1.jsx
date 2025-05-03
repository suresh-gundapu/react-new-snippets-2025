import Props_child_parent_2 from "./Props_child_parent_2";
import { useState } from "react";
let Props_child_parent_1 = () => {
  let [count, setCount] = useState(0);
  let handleComp = (data) => {
    setCount(data);
  };
  return (
    <>
      <div className="card bg-suscces m-auto">
        <div className="card-header">
          <h3>This Parent Comp</h3>
          <h3>The count is coming from child comp -- {count}</h3>
        </div>
      </div>
      <Props_child_parent_2 sendComp={handleComp}></Props_child_parent_2>
    </>
  );
};

export default Props_child_parent_1;
