import {StyleSheet, Dimensions} from 'react-native';

const devicesSize = Dimensions.get('window');

import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: devicesSize.height / 3,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  inputContainer: {
    flex: 1,
  },
});
