import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 0.65,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
  },
  innerLoginBody: {
    marginHorizontal: 20,
    flex: 0.9,
    justifyContent: 'space-between',
  },
  loginHeader: {
    marginBottom: 10,
  },
  loginBody: {
    padding: 5,
  },
  textHeader: {
    color: '#6346ca',
    fontSize: 27,
    fontWeight: 'bold',
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
  loginFoot: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 15,
  },
  textRegister: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
});
