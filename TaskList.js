import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskList = ({ tasks, dispatch }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => dispatch({ type: 'TOGGLE_TASK', payload: item.id })}>
          <Text style={[styles.task, item.completed && styles.completed]}>{item.text}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 15,
    backgroundColor: '#D3D3D3',
    marginVertical: 5,
    borderRadius: 5,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TaskList;
