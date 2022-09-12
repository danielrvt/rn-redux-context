import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import { store } from "./store/redux/store";
import ReduxCounter from "./components/ReduxCounter";
import ContextCounter from "./components/ContextCounter";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.countersContainer}>
        <ReduxCounter />
        <ContextCounter />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  countersContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
