import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgba(200,200,200,0.9)',
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
