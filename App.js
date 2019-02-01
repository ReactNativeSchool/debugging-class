import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

class App extends React.Component {
  state = { number: 3 };

  getNumber = () => {

  };

  incrementNumber = () => {

  };

  decrementNumber = () => {

  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.number}</Text>
        <Button title="Increment Number" onPress={this.incrementNumber} />
        <Button title="Decrement Number" onPress={this.decrementNumber} />
        <Button title="Get New Number" onPress={this.getNumber} />
      </View>
    );
  }
}

export default App;
