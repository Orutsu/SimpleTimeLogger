import React, { useEffect } from 'react';
// Components
import { MainNavigator } from '../navigation';
import { NavigationContainer as NavigationWrap } from '@react-navigation/native';

// Libs & Utils
import {
  isReadyNavigation,
  navigationRef,
} from '../navigation/navigationService';

const NavigationContainer = () => {
  useEffect(() => {
    return () => {
      isReadyNavigation.current = false;
    };
  }, []);

  return (
    <NavigationWrap
      ref={navigationRef}
      onReady={() => {
        isReadyNavigation.current = true;
      }}>
      <MainNavigator />
    </NavigationWrap>
  );
};

export default NavigationContainer;
