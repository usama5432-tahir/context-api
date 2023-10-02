import React, { useContext } from "react";
import CounterContext from "./CounterContext";
const Child = () => {
  let name = useContext(CounterContext);
  console.log(name);
  return (
    <div>
      <h1>This is first Child using CounterContext</h1>
      <h1>This is {name[0]}</h1>
      <button
        onClick={() => {
          name[1](++name[0]);
        }}
      >
        Incremnet
      </button>
      <button onClick={() => name[1](1)}>reset</button>
    </div>
  );
};
export default Child;
