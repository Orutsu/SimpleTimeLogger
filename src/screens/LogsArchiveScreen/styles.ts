import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

export default StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  pageContainer: {
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.BLACK,
  },
  label: {
    fontSize: 18,
    color: COLORS.BLACK,
  },
  note: {
    fontSize: 18,
    color: COLORS.BLACK,
  },
});
