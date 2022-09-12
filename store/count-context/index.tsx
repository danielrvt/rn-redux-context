import React, { createContext, useContext, useState } from "react";

const INITIAL_COUNT = 0;

type CounterContextType = {
  counter: number;
  increment?: () => void;
  decrement?: () => void;
};

export const CounterContext = createContext<CounterContextType>({
  counter: 0,
  increment: () => {},
  decrement: () => {},
});

export const useCounter = () => useContext(CounterContext);

const CounterContextProvider: React.FC<any> = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);

  const decrement = () => setCounter(counter - 1);

  return (
    <CounterContext.Provider
      value={{
        counter,
        increment,
        decrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
