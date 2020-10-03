import React from "react";
import { Platform, StyleSheet, View, Text } from "react-native";
import { Navigation } from "./navigation";
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}

const height = Platform.OS == "web" ? "100vh" : "100%";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: "100%",
  },
});
export default App;
