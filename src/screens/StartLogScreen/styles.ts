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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.BLACK,
  },
  descriptionInput: {
    height: 120,
  },
  disabledButton: {
    opacity: 0.5,
  },
  button: {
    width: 150,
    height: 150,
  },
});
