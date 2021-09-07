import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StyledInput from '../../components/StyledInput';
import PlayButton from '../../assets/images/play-button.png';
import StopButton from '../../assets/images/stop-button.png';
import { positionHelpers, spacingHelpers } from '../../styles';
import styles from './styles';
import { useDispatch } from 'react-redux';
import {
  addTimeLog,
  clearCurrentTimeLog,
  setCurrentTimeLog,
} from '../../store/timeLogs';
import { useTypedSelector } from '../../store';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';
import { TimeLogBlockInfo } from '../../components/TimeLogBlockInfo';
import { TimeLog } from '../../types/types';

const StartLogScreen = () => {
  const dispatch = useDispatch();
  const currentTimeLog = useTypedSelector(
    (store) => store.timeLogs.currentTimeLog,
  );
  const [logName, setLogName] = useState('');
  const [logDescription, setLogDescription] = useState('');

  const [activeDuration, setActiveDuration] = useState(-1);

  useFocusEffect(() => {
    let interval: NodeJS.Timeout;
    if (currentTimeLog) {
      interval = setInterval(() => {
        // if (activeTimesheetDuration < 0) {
        setActiveDuration(
          moment(new Date()).diff(currentTimeLog.startTime, 'second'),
        );
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  });

  const onStartLogPress = () => {
    dispatch(
      setCurrentTimeLog({
        name: logName,
        description: logDescription,
        startTime: new Date(),
      }),
    );
    setLogDescription('');
    setLogName('');
  };

  const onStopLogPress = () => {
    if (currentTimeLog) {
      const newTimeLog: TimeLog = {
        name: currentTimeLog.name,
        description: currentTimeLog?.description,
        duration: moment(new Date()).diff(currentTimeLog.startTime, 'second'),
        startTime: currentTimeLog.startTime,
        endTime: new Date(),
      };
      dispatch(addTimeLog(newTimeLog));
      dispatch(clearCurrentTimeLog());
      setActiveDuration(0);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View
        style={[
          styles.pageContainer,
          positionHelpers.columnSpaceBetween,
          spacingHelpers.pH20,
        ]}>
        {!currentTimeLog && (
          <View>
            <Text style={styles.title}>Start your log!</Text>
            <StyledInput
              style={spacingHelpers.mT10}
              label="Name"
              value={logName}
              onChangeText={(text) => setLogName(text)}
            />
            <StyledInput
              style={[spacingHelpers.mT10, styles.descriptionInput]}
              inputStyle={styles.descriptionInput}
              label="Description"
              multiline={true}
              numberOfLines={4}
              value={logDescription}
              onChangeText={(text) => setLogDescription(text)}
            />
          </View>
        )}
        {currentTimeLog && (
          <View>
            <Text style={styles.title}>Stop your log!</Text>
            <TimeLogBlockInfo
              duration={activeDuration}
              timeLog={currentTimeLog}
            />
          </View>
        )}
        <TouchableOpacity
          disabled={logName === '' && !currentTimeLog}
          style={[
            positionHelpers.alighCenter,
            logName === '' && !currentTimeLog && styles.disabledButton,
          ]}
          onPress={currentTimeLog ? onStopLogPress : onStartLogPress}>
          <Image
            source={currentTimeLog ? StopButton : PlayButton}
            style={styles.button}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StartLogScreen;
