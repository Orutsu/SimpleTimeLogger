import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import NavigationContainer from './src/screens/navigationContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store, { persistor } from './src/store';

export default (): React.ReactFragment => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};
