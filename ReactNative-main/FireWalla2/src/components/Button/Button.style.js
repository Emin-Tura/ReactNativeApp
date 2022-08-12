import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btn: {
    backgroundColor: '#5f43c3',
    width: '75%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 20,
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 12,
  },
  textBtn: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
