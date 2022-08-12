import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 12,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    padding: Platform.OS === 'android' ? 0 : 5,
  },
});
