import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
export default StyleSheet.create({
  mainStyle: {
    marginTop: 30,
    marginBottom: 10,
  },
  input: {
    textAlign: 'center',
    fontSize: 18,
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: '#aaa',
    width: width / 1.2,
    padding: 10,
    marginVertical: 15, //MarginTop and MarginBottom
  },
});
