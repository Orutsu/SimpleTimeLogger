import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

export default StyleSheet.create({
  itemContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    paddingLeft: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  deleteText: {
    fontSize: 12,
    color: COLORS.RED,
  },
  optionsText: {
    fontSize: 17,
    marginTop: 4,
    fontWeight: '400',
    marginLeft: 20,
    color: COLORS.BLACK,
  },
  buttonContainer: {
    paddingVertical: 5,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 75,
    alignItems: 'center',
  },
});
