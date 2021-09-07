import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTypedSelector } from '../../store';
import styles from './styles';

const LogsArchiveScreen = () => {
  const timeLogs = useTypedSelector((store) => store.timeLogs.timeLogs);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={[styles.pageContainer]}>
        <FlatList
          data={timeLogs}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default LogsArchiveScreen;
