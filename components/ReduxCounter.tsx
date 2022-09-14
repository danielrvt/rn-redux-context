import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useCounter } from "../store/redux/counter";

function ReduxCounter() {
  const dispatch = useDispatch();
  const [count, actions, reducers] = useCounter();
  const handleIncrement = () => dispatch(actions.increment());
  const handleDecrement = () => dispatch(actions.decrement());

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
