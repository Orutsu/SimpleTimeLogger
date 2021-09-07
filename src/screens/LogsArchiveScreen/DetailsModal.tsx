/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
// Compoments
import {
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
  Modal,
  ViewStyle,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Types
import { TimeLog } from '../../types/types';

// Helpers
import { COLORS, positionHelpers, spacingHelpers } from '../../styles';

// Assets && Styles
import ArrowIcon from '../../assets/images/icons/arrow-left.svg';
import styles from './styles';
import { TimeLogBlockInfo } from '../../components/TimeLogBlockInfo';
import StyledInput from '../../components/StyledInput';
import { useDispatch } from 'react-redux';
import { addCommentToTimeLog } from '../../store/timeLogs';
import { useTypedSelector } from '../../store';

interface Props {
  // style?: ViewStyle | ViewStyle[];
  isVisible: boolean;
  onCancel: () => void;
  timeLogIndex: number;
}

const DetailsModal: React.FC<Props> = ({
  isVisible,
  onCancel,
  timeLogIndex,
}) => {
  const dispatch = useDispatch();
  const timeLog = useTypedSelector(
    (store) => store.timeLogs.timeLogs[timeLogIndex],
  );
  const [note, setNote] = useState('');

  const onSubmitNote = () => {
    dispatch(
      addCommentToTimeLog({ newNote: note, timeLogIndex: timeLogIndex }),
    );
    setNote('');
  };

  return (
    <Modal visible={isVisible} animationType="none">
      <SafeAreaView
        style={[
          positionHelpers.fill,
          spacingHelpers.pH20,
          { backgroundColor: COLORS.WHITE },
        ]}>
        <View style={positionHelpers.rowFill}>
          <TouchableOpacity onPress={onCancel}>
            <ArrowIcon style={styles.icon} width={25} height={25} />
          </TouchableOpacity>
          <Text style={styles.title}>Your time log</Text>
          <ArrowIcon width={25} height={25} fillOpacity={0} />
        </View>
        <TimeLogBlockInfo
          style={spacingHelpers.mT10}
          timeLog={timeLog}
          duration={timeLog?.duration || 0}
        />
        <Text style={[styles.label, spacingHelpers.mT10]}>
          Notes ({timeLog?.notes?.length}):
        </Text>
        <StyledInput
          value={note}
          onChangeText={(text) => setNote(text)}
          onSubmitEditing={() => onSubmitNote()}
          placeholder="Write a note..."
        />
        <FlatList
          data={timeLog?.notes}
          renderItem={({ item }) => <Text style={styles.note}>- {item}</Text>}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default DetailsModal;
