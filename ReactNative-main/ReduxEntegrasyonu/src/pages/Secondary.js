import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function Secondary() {
  const list = useSelector(s => s.nameList);
  const userName = useSelector(s => s.userName);

  const dispatch = useDispatch();
  const clearList = () => {
    dispatch({type: 'CLEAR_LIST'});
  };

  console.log(list);

  return (
    <View>
      <FlatList
        keyExtractor={index => index.toString()}
        data={list}
        renderItem={({item}) => <Text>{item}</Text>}
      />
      <Text>UserName : {userName}</Text>
      <Button title="Temizle" onPress={clearList} />
    </View>
  );
}

export default Secondary;
