import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1c3435',
    fontFamily: 'AbrilFatface-Regular',
  },
  innerContainer: {
    flex: 0.55,
    margin: 10,
  },
  innerBody: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    flex: 1,
  },
  infoText: {
    textAlign: 'center',
    color: '#FDF4EE',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'italic',
  },
});
