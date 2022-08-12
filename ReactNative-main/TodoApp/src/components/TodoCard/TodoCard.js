import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './TodoCard.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function TodoCard({todo, todoData, setToDo}) {
  const [isCompleted, setIsCompleted] = useState(todoData.completed);

  const handleComplete = () => {
    setToDo(
      todo.map(item =>
        item.id === todoData.id ? {...item, completed: !isCompleted} : item,
      ),
    );
    setIsCompleted(!isCompleted);
  };
  const handleDelete = () =>
    setToDo(todo.filter(item => item.id !== todoData.id));

  return (
    <View>
      <TouchableOpacity onPress={handleComplete} onLongPress={handleDelete}>
        <Text style={[styles.text, isCompleted && styles.line]}>
          {todoData.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default TodoCard;
