import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
export default StyleSheet.create({
  memberStyle: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkStyle: {
    width: 20,
    height: 20,
    borderColor: '#ccc',
  },
  forgetStyle: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  footStyle: {
    alignItems: 'center',
    marginVertical: 20,
  },
  gradientStyle: {
    width: width / 1.5,
    padding: 10,
    borderRadius: 20,
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
