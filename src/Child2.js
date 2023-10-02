import React, { useReducer } from "react";
import counterReducer from "./CounterReducer";
const Child2 = () => {
  let [state, disptach] = useReducer(counterReducer, 10);
  console.log(state);
  return (
    <div>
      <h1>This is Second child using CounterReducer</h1>
      <h1>value of reducer :{state}</h1>
      <button
        onClick={() => {
          disptach("INCREMENT");
        }}
      >
        Incremnet reducer
      </button>
    </div>
  );
};
export default Child2;
