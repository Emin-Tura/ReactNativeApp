import {Dimensions, StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  innerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginHorizontal: 2,
    backgroundColor: 'white',
  },
  title: {
    color: '#000',
    fontWeight: '400',
    fontSize: 16,
    marginRight: 9,
  },
  rightValue: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default {
  secondary: StyleSheet.create({
    ...baseStyle,
    container: {
      marginVertical: 10,
      paddingHorizontal: 10,
    },
    innerInput: {
      ...baseStyle.innerInput,
      borderRadius: 10,
      paddingHorizontal: 10,
    },
  }),
  primary: StyleSheet.create({
    ...baseStyle,
    innerInput: {
      ...baseStyle.innerInput,
      borderBottomWidth: 0.5,
      paddingBottom: 12,
      borderColor: '#d0d0d0',
    },
  }),
};
