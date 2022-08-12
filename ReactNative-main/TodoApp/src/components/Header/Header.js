import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';

function Header({toDo}) {
  const toDoLength = toDo.filter(todo => !todo.completed).length;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>YAPILACAKLAR</Text>
      <Text style={styles.textStyle}>{toDoLength}</Text>
    </View>
  );
}

export default Header;
