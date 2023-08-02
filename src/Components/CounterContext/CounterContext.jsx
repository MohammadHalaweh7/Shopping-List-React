import React, { createContext, useState } from "react";

export const CounterContext = createContext(0);
export function CounterContextProvider(props) {
    const [count, setCount] = useState(0);

  function increase() {
    const localStorageString = localStorage.getItem("cart");
    const data = JSON.parse(localStorageString);
    let counter = 0;
    data.map((ele, key) => {
      counter += data[key].counter;
    });
    console.log(data.length);
    setCount(counter);
  }

  return (
    <CounterContext.Provider value={{ count, increase }}>
      {props.children}
    </CounterContext.Provider>
  );
}
