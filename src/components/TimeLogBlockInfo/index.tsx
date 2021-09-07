import moment from 'moment';
import React, { FC } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { formatSeconds } from '../../helpers/time';
import { spacingHelpers } from '../../styles';
import { TimeLog } from '../../types/types';

import styles from './styles';

interface TimeLogBlockInfoProps {
  style?: ViewStyle | ViewStyle[];
  timeLog?: TimeLog;
  duration: number;
}

export const TimeLogBlockInfo: FC<TimeLogBlockInfoProps> = ({
  style,
  timeLog,
  duration,
}) => {
  return (
    <View style={style}>
      <View style={spacingHelpers.mT10}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.valueText}>{timeLog?.name}</Text>
      </View>
      {timeLog?.description !== '' && (
        <View style={spacingHelpers.mT10}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.valueText}>{timeLog?.description}</Text>
        </View>
      )}
      <View style={spacingHelpers.mT10}>
        <Text style={styles.label}>Start time:</Text>
        <Text style={styles.valueText}>
          {moment(timeLog?.startTime).format('YYYY-MM-DD HH:mm:ss')}
        </Text>
      </View>
      {timeLog?.endTime && (
        <View style={spacingHelpers.mT10}>
          <Text style={styles.label}>End time:</Text>
          <Text style={styles.valueText}>
            {moment(timeLog?.endTime).format('YYYY-MM-DD HH:mm:ss')}
          </Text>
        </View>
      )}
      <View style={spacingHelpers.mT10}>
        <Text style={styles.label}>Duration:</Text>
        <Text style={styles.valueText}>
          {formatSeconds(duration, 'HH:mm:SS')}
        </Text>
      </View>
    </View>
  );
};
