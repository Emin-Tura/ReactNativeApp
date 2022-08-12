import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#e0dee0',
    flex: 1,
  },
  boxHeader: {
    flex: 0.15,
    backgroundColor: '#ffffff',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  innerBoxHeader: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxImage: {
    flex: 0.4,
    backgroundColor: '#ffffff',
    marginVertical: 10,
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },

  boxInfo: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginVertical: 10,
    padding: 8,
    borderRadius: 5,
    flexDirection: 'row',
  },
  boxProps: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginVertical: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
