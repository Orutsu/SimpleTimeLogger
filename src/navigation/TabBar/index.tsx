/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement } from 'react';

// Components
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';

// Libs & Utils
import navigationService from '../navigationService';

// Types
import { SvgProps } from 'react-native-svg';
import { AllRoutes, RootRoutes } from '../routes';
import styles from './styles';

// Styles && Assets
import { COLORS, positionHelpers } from '../../styles';
import Archive from '../../assets/images/TabBarIcons/archive.svg';
import ArchiveFill from '../../assets/images/TabBarIcons/archive-fill.svg';
import PlayCircle from '../../assets/images/TabBarIcons/play-circle.svg';
import PlayCircleFill from '../../assets/images/TabBarIcons/play-circle-fill.svg';

type TabBarItem = {
  icon: ReactElement<SvgProps> | null;
  iconActive: ReactElement<SvgProps> | null;
  label: string;
  route: RootRoutes;
  activeRoutes: AllRoutes[];
};

const TabBar = () => {
  const tabBarItems: TabBarItem[] = [
    {
      icon: <PlayCircle style={styles.icon} />,
      iconActive: <PlayCircleFill style={styles.icon} />,
      label: 'Start Log',
      route: 'Start_Log_Screen',
      activeRoutes: ['Start_Log_Screen'],
    },
    {
      icon: <Archive style={styles.icon} />,
      iconActive: <ArchiveFill style={styles.icon} />,
      label: 'Acrhive',
      route: 'Logs_Archive',
      activeRoutes: ['Logs_Archive'],
    },
  ];

  const activeRouteName =
    navigationService.getActiveRouteNameWithDefaultRoute('Start_Log_Screen');

  return (
    <SafeAreaView>
      <View style={[positionHelpers.rowFill, styles.tabbar]}>
        {tabBarItems.map((item, index) => {
          const isActive = item.activeRoutes.includes(
            activeRouteName as AllRoutes,
          );
          const ItemIcon = isActive ? item.iconActive : item.icon;

          return (
            <TouchableOpacity
              key={item.route}
              onPress={() => navigationService.navigate(item.route)}>
              <View style={styles.optionContainer}>
                {ItemIcon}
                <Text
                  style={[
                    styles.optionsText,
                    isActive
                      ? { color: COLORS.GREEN }
                      : { color: COLORS.BLACK },
                  ]}>
                  {item.label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default TabBar;
