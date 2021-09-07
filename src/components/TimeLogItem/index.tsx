import React from 'react';
// Components
import { Text, ViewStyle, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-swipeable';

// Styles
import { COLORS, positionHelpers } from '../../styles';
import styles from './styles';

interface Props {
  style?: ViewStyle | ViewStyle[];
  name?: string;
  onItemPress?: () => void;
  onDeletePress?: () => void;
  onEditPress?: () => void;
}

const TimeLogItem: React.FC<Props> = ({
  style,
  name,
  onItemPress,
  onDeletePress,
}) => {
  const rightButtons = [
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: COLORS.LIGHT_RED }]}
      onPress={() => onDeletePress && onDeletePress()}>
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>,
  ];

  return (
    <Swipeable rightButtons={rightButtons}>
      <TouchableOpacity
        style={[styles.itemContainer, positionHelpers.rowStart, style]}
        onPress={() => onItemPress && onItemPress()}>
        <Text style={styles.optionsText}>{name}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default TimeLogItem;
