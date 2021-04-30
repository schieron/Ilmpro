import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = { counter: 0 };

  render() {
    const currentCounter = this.state.counter;
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>
          {currentCounter}
        </Text>
        <Button
          title="Drück mich"
          onPress={() => this.setState({ counter: currentCounter + 1 })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    color: 'orange',
    fontSize: 180,
  },
});