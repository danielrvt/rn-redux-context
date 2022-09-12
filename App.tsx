import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CountContextProvider, { useCounter } from "./store/count-context";

function App() {
  const countContext = useCounter();

  const { counter, increment, decrement } = countContext;

  const handleIncrement = () => increment && increment();

  const handleDecrement = () => decrement && decrement();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.count}>{`${counter}`}</Text>
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
    backgroundColor: "#5E33FF",
    fontSize: 54,
    borderColor: "#000",
    padding: 12,
  },
});

export default () => (
  <CountContextProvider>
    <App />
  </CountContextProvider>
);
