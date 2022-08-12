import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  inputContainer: {
    backgroundColor: 'rgba(255,255,255,1)',
    padding: 20,
    marginTop: -height / 1.8,
    borderRadius: 20,
    width: width / 1.1,
    height: height / 1.8,
  },
  headerStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
