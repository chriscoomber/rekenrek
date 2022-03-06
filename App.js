import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [number, onChangeNumber] = React.useState("0");
  const [submittedNumber, onChangeSubmittedNumber] = React.useState("0");
  const [validationError, onChangeValidationError] = React.useState(null);

  // Validate the input string, checking if it's a number between 0 and 20.
  // If yes - update state `submittedNumber`.
  // If no - update state `validationError`.
  function validateAndSubmit(inputString) {
    // First convert to integer
    const inputNumber = Number(inputString);

    if (isNaN(inputNumber)) {
      onChangeValidationError(`Oops, ${inputString} wasn't a number!`);
      return;
    }

    if (inputNumber < 0 || inputNumber > 20) {
      onChangeValidationError(`Oops, ${inputNumber} is not between 0 and 20!`);
      return;
    }

    // Success
    onChangeValidationError(null);
    onChangeSubmittedNumber(inputNumber);
  }

  return (
    <View style={styles.container}>
      <Text>Please type a number between 0 and 20</Text>
      {(validationError === null) || <Text>{validationError}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
        onSubmitEditing={(value) => validateAndSubmit(value.nativeEvent.text)}
      />
      <Text>{submittedNumber}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
