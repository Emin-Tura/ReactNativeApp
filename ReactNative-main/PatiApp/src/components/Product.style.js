import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('screen').width / 2.5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  innerContainer: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  inStock: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: 'red',
    marginVertical: 5,
  },
});
