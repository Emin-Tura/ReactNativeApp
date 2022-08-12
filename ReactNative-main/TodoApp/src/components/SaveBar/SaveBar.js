import React, {useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './SaveBar.styles';

function SaveBar({setToDo, toDo}) {
  const [inputText, setInputText] = useState('');

  const handleTodo = () => {
    const isDuplicate = toDo.find(todo => todo.title === inputText);
    console.log(isDuplicate);

    if (inputText && !isDuplicate) {
      const newTodo = {
        id: new Date().getTime().toString(),
        title: inputText,
        completed: false,
      };
      setToDo([...toDo, newTodo]);
      setInputText('');
    }
  };

  return (
    <View style={styles.saveContainer}>
      <View style={styles.saveBody}>
        <TextInput
          placeholder="Yapilacak..."
          style={styles.saveText}
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.saveBtn} onPress={handleTodo}>
          <Text style={{textAlign: 'center', color: '#fff', fontSize: 20}}>
            Kaydet
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SaveBar;
