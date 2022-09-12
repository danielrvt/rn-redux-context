import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const INITIAL_COUNT = 0;

type CounterContextType = {
  counter: number;
  increment?: () => void;
  decrement?: () => void;
};

export const CounterContext = createContext<CounterContextType>({
  counter: INITIAL_COUNT,
  increment: () => {},
  decrement: () => {},
});

export const useCounter = () => useContext(CounterContext);

const CounterContextProvider: React.FC<any> = ({ children }) => {
  const [counter, setCounter] = useState(INITIAL_COUNT);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  useEffect(() => {
    AsyncStorage.getItem("COUNTER_CONTEXT::COUNT").then((storedCount) => {
      const count = parseInt(storedCount ?? "0", 10);
      if (count === 0) return;

      setCounter(count);
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("COUNTER_CONTEXT::COUNT", `${counter}`);
  }, [counter]);

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
