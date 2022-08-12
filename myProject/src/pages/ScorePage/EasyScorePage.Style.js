import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: Dimensions.get('screen').width * 0.85,
    height: Dimensions.get('screen').height * 0.35,
    backgroundColor: '#6B7D6D',
    borderWidth: 7,
    borderColor: '#8c7670',
    borderRadius: 10,
    opacity: 0.8,
    overflow: 'hidden',
    paddingVertical: 5,
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  headerText: {
    fontSize: 30,
    color: '#000',
  },
  point: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#C7D0D8',
    marginTop: 10,
    paddingHorizontal: 40,
  },
});
