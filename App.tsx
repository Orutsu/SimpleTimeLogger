import React from 'react';
import NavigationContainer from './src/screens/navigationContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default (): React.ReactFragment => {
  return (
    <SafeAreaProvider>
      {/* <Provider store={store}> */}
      <NavigationContainer />
      {/* </Provider> */}
    </SafeAreaProvider>
  );
};
