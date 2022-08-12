import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function Primary() {
  const [text, setText] = useState('');
  const [userName, setUserName] = useState('');

  const dispatch = useDispatch();
  const addList = () => {
    dispatch({type: 'ADD_NAME', payload: {name: text}});
    dispatch({type: 'USER_NAME', payload: {userName}});

    setText('');
    setUserName('');
  };
  return (
    <View>
      <Text>Hello I'm Primary</Text>
      <TextInput
        style={{borderWidth: 1, margin: 4, backgroundColor: 'gray'}}
        value={text}
        onChangeText={setText}
        placeholder="Isim Giriniz"
      />
      <TextInput
        style={{borderWidth: 1, margin: 4, backgroundColor: 'gray'}}
        value={userName}
        onChangeText={setUserName}
        placeholder="username giriniz"
      />
      <Button title="Up Counter" onPress={addList} />
    </View>
  );
}

export default Primary;
