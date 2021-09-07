import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TimeLogItem from '../../components/TimeLogItem';
import { useTypedSelector } from '../../store';
import DetailsModal from './DetailsModal';
import styles from './styles';

const LogsArchiveScreen = () => {
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
