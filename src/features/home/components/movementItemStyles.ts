import { StyleSheet } from 'react-native';

export const MovementItemStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 8,
    paddingBottom: 8,
  },
  firstElement: {
    marginTop: 23,
    paddingTop: 23,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  lastElement: {
    marginBottom: 23,
    paddingBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 12,
  },
  leftColumn: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightColumn: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  productName: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    color: '#000',
    marginBottom: 8,
  },
  date: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
  },
  amountIndicator: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
  },
  lessSymbol: {
    color: 'red',
  },
  moreSymbol: {
    color: 'green',
  },
  filtersContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonFilter: {
    width: 170,
  },
});
