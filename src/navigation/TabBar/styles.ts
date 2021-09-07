import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

export default StyleSheet.create({
  tabbar: {
    backgroundColor: COLORS.WHITE,
    height: 58,
    marginHorizontal: 10,
    paddingHorizontal: 40,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: 'space-around',
  },
  optionsText: {
    fontSize: 12,
    lineHeight: 16,
    marginTop: 4,
  },
  optionContainer: {
    height: 41,
    width: 70,
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
