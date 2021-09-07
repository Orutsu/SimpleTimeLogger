import React, { FC } from 'react';
// Components
import {
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

// Styles
import styles from './styles';

interface StyledInputProps extends TextInputProps {
  label?: string;
  style?: ViewStyle | ViewStyle[];
  inputStyle?: TextStyle | TextStyle[];
}

const StyledInput: FC<StyledInputProps> = ({
  value,
  onChangeText,
  label,
  inputStyle,
  style,
  ...restProps
}) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={[styles.input, inputStyle]}
        {...restProps}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default StyledInput;
