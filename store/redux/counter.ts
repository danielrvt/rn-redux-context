import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    setCount: (state, action) => action.payload,
  },
});

export default counterSlice.reducer;

export const useCounter = () => {
  const count = useSelector((store: any) => store.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("COUNTER_REDUX::COUNT")
      .then((storedCount) => {
        const savedCount = parseInt(storedCount ?? "0", 10);
        if (savedCount === 0) {
          return;
        }
        dispatch(counterSlice.actions.setCount(savedCount));
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (count === 0) return;
    AsyncStorage.setItem("COUNTER_REDUX::COUNT", `${count}`);
  }, [count]);

  return [count, counterSlice.actions, counterSlice.reducer];
};
