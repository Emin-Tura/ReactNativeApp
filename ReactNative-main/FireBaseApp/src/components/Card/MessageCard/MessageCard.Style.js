import {StyleSheet} from 'react-native';

import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.darkgreen,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    color: 'white',
  },
  date: {
    color: 'white',
  },
  title: {
    paddingTop: 5,
    color: 'white',
  },
});
