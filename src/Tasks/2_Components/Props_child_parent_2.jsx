import { useState } from "react";
let Props_child_parent_2 = (props) => {
  let [count, setCount] = useState(0);
  let handleClick = () => {
    setCount(() => {
      return count++;
    });
    props.sendComp(count);
  };
  // props.sendComp = count;//React props are read-only – you cannot assign values to them like that. Props can only be passed down, not mutated.
  return (
    <>
      <div className="card bg-suscces m-auto">
        <div className="card-header">
          <h3>This Child Comp</h3>

          <button
            className="btn btn-warning"
            onClick={() => {
              handleClick();
            }}
          >
            Click me{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Props_child_parent_2;
