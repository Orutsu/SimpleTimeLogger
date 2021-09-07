import React from 'react';
import { Text, ViewStyle, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-swipeable';
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
  onEditPress,
}) => {
  const rightButtons = [
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: COLORS.LIGHT_RED }]}
      onPress={() => onDeletePress && onDeletePress()}>
      {/* <EvilIcons name="trash" size={40} color="#EE4B2B" /> */}
      <Text style={{ fontSize: 12, color: '#EE4B2B' }}>Delete</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: COLORS.LIGHT_BLUE }]}
      onPress={() => onEditPress && onEditPress()}>
      {/* <EvilIcons name="pencil" size={40} color="#0047AB" /> */}
      <Text style={{ fontSize: 12, marginLeft: -2, color: '#0047AB' }}>
        Edit
      </Text>
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
