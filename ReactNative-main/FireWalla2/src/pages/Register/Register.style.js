import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 0.72,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  innerLoginBody: {
    marginHorizontal: 30,
    marginTop: 5,
    padding: 20,
    flex: 0.9,
    justifyContent: 'space-between',
  },
  textHeader: {
    color: '#6346ca',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
  },
});
