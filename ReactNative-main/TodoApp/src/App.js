import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/Header/Header';
import SaveBar from './components/SaveBar/SaveBar';
import TodoCard from './components/TodoCard/TodoCard';

function App() {
  const [toDo, setToDo] = useState([]);
  console.log(toDo);
  const renderTodo = ({item}) => (
    <TodoCard setToDo={setToDo} todo={toDo} todoData={item} />
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
            <Header toDo={toDo} />
            <FlatList data={toDo} renderItem={renderTodo} />
          </View>
          <SaveBar toDo={toDo} setToDo={setToDo} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    backgroundColor: '#102027',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
});

export default App;
