import { StyleSheet } from 'react-native';

export const CardStyle = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  card: {
    width: 286,
    height: 143,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#334FFA',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  title: {
    textTransform: 'capitalize',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: 'white',
  },
  amount: {
    alignSelf: 'center',
    marginTop: 8,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 28,
    lineHeight: 44,
    color: 'white',
  },
});
