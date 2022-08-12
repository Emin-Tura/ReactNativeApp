import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 3,
  },
  cardText: {
    fontSize: 10,
    margin: 10,
    marginTop: 3,
  },
  cardButtonContainer: {
    backgroundColor: '#00C2FF',
    padding: 10,
    alignItems: 'center',
  },
  cardBtnTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});
