import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0C962',
  },
  logo: {
    height: Dimensions.get('screen').height / 4,
    width: Dimensions.get('screen').width,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: '#900C3F',
  },
  logoContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
  },
});
