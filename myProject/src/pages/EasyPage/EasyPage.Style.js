import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  headerText: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },

  innerContainer: {
    flex: 0.65,
    margin: 10,
  },
  buttonContainer: {
    flex: 0.55,
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonBody: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footer: {
    flex: 0.2,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
