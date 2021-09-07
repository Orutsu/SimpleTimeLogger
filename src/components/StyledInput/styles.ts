import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

export default StyleSheet.create({
  input: {
    minHeight: 40,
    width: '100%',
    paddingHorizontal: 5,
    backgroundColor: COLORS.WHITE,
  },
  labelText: {
    fontSize: 16,
    color: COLORS.BLACK,
  },
  inputContainer: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
