import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ text, setText, addTask }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={text}
        onChangeText={setText}
      />
      <Button title="Save" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default TaskInput;
