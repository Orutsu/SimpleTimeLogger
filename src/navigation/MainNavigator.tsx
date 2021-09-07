import React from 'react';
// Components
import TabBar from './TabBar';
import LogsArchiveScreen from '../screens/LogsArchiveScreen';
import StartLogScreen from '../screens/StartLogScreen';

// Libs & Utils
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Types
import { MAIN_ROUTES } from './routes';

const DashboardTabs = createBottomTabNavigator();

const MainNavigator = () => (
  <DashboardTabs.Navigator
    initialRouteName={MAIN_ROUTES.START_LOG_SCREEN}
    screenOptions={{ headerShown: false }}
    tabBar={() => <TabBar />}>
    <DashboardTabs.Screen
      name={MAIN_ROUTES.START_LOG_SCREEN}
      component={StartLogScreen}
    />
    <DashboardTabs.Screen
      name={MAIN_ROUTES.LOGS_ARCHIVE}
      component={LogsArchiveScreen}
    />
  </DashboardTabs.Navigator>
);

export default MainNavigator;
