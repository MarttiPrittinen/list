import React, { useReducer, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

// Reducer function to manage tasks
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now().toString(), text: action.payload, completed: false }];
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

const App = () => {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TASK', payload: text });
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TaskInput text={text} setText={setText} addTask={addTask} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
});

export default App;
