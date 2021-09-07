import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import TimeLogItem from '../../components/TimeLogItem';
import { useTypedSelector } from '../../store';
import { deleteTimeLogByIndex } from '../../store/timeLogs';
import DetailsModal from './DetailsModal';
import styles from './styles';

const LogsArchiveScreen = () => {
  const dispatch = useDispatch();
  const timeLogs = useTypedSelector((store) => store.timeLogs.timeLogs);
  const [isLogDetailsModalVisible, setIsLogDetailsModalVisible] =
    useState(false);
  const [pickedTimeLogIndex, setPickedTimeLogIndex] = useState(-1);

  return (
    <>
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <View style={[styles.pageContainer]}>
          <FlatList
            data={timeLogs}
            renderItem={({ item, index }) => (
              <TimeLogItem
                onItemPress={() => {
                  setIsLogDetailsModalVisible(true);
                  setPickedTimeLogIndex(index);
                }}
                onDeletePress={() => {
                  dispatch(deleteTimeLogByIndex(index));
                }}
                name={item.name}
              />
            )}
          />
        </View>
        {isLogDetailsModalVisible && (
          <DetailsModal
            isVisible={isLogDetailsModalVisible}
            onCancel={() => {
              setIsLogDetailsModalVisible(false);
            }}
            timeLogIndex={pickedTimeLogIndex}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default LogsArchiveScreen;
