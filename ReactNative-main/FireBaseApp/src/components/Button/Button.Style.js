import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const baseStyle = StyleSheet.create({
  container: {
    padding: 8,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 17,
    color: '#fff',
  },
});

export default {
  //primary scope
  primary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: colors.darkgreen,
    },
    buttonText: {
      ...baseStyle.buttonText,
      color: '#fff',
    },
  }),

  //secondary scope
  secondary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: '#fff',
      borderColor: colors.darkgreen,
      borderWidth: 1,
    },

    buttonText: {
      ...baseStyle.buttonText,
      color: colors.darkgreen,
    },
  }),
};
