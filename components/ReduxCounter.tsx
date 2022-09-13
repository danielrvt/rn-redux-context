import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setCount, decrement, increment } from "../store/redux/counter";

function ReduxCounter() {
  const count = useSelector((store: any) => store.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  useLayoutEffect(() => {
    AsyncStorage.getItem("COUNTER_REDUX::COUNT")
      .then((storedCount) => {
        const savedCount = parseInt(storedCount ?? "0", 10);
        if (savedCount === 0) {
          return;
        }
        dispatch(setCount(savedCount));
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (count === 0) return;
    AsyncStorage.setItem("COUNTER_REDUX::COUNT", `${count}`);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux</Text>
      <Text style={styles.count}>{`${count}`}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="+" color="#fff" onPress={handleIncrement} />
        </View>
        <View style={styles.button}>
          <Button title="-" color="#FFF" onPress={handleDecrement} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { paddingBottom: 50, fontSize: 40 },
  count: { fontSize: 36 },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 32,
    justifyContent: "space-around",
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#3383FF",
    fontSize: 54,
    borderColor: "#000",
    padding: 12,
  },
});

export default () => <ReduxCounter />;
