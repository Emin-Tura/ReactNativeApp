import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  logo: {
    width: width / 1,
    height: height / 3,
    resizeMode: 'center',
  },
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
