import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
  },
  image: {
    width: 353,
    height: 350,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 32,
    marginTop: 20,
  },
  subtitle: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    color: '#9B9898',
    marginBottom: 20,
  },
  date: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: '#000',
    marginBottom: 20,
  },
  amount: {
    marginTop: 12,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 33,
    color: '#000000',
    marginBottom: 50,
  },
});
