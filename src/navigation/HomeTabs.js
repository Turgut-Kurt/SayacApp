import {
  Bills,
  BillsSelected,
  Houses,
  HousesSelected,
  Settings,
  SettingsSelected,
  Status,
  StatusSelected,
} from '~assets';
import {
  BillsScreen,
  HousesScreen,
  SettingsScreen,
  StatusScreen,
} from '~screens';
import {StyleSheet, Text} from 'react-native';

import React from 'react';
import VectorImage from 'react-native-vector-image';
import {colors} from '~components';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {fontSize} from '~utils';
import {homeTabs} from '~config';

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor={colors.MainBlue}
      inactiveColor={colors.Water}
      barStyle={styles.barStyle}>
      <Tab.Screen
        name={homeTabs.houses}
        component={HousesScreen}
        options={{
          tabBarLabel: <Text>Haneler</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={!focused ? Houses : HousesSelected}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.bills}
        component={BillsScreen}
        options={{
          tabBarLabel: <Text>Faturalar</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={!focused ? Bills : BillsSelected}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.status}
        component={StatusScreen}
        options={{
          tabBarLabel: <Text>Durum</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={[styles.svgStyle]}
              source={!focused ? Status : StatusSelected}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.settings}
        component={SettingsScreen}
        options={{
          tabBarLabel: <Text>Ayarlar</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={!focused ? Settings : SettingsSelected}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  barStyle: {backgroundColor: '#fff'},
  svgStyle: {width: fontSize(24), height: fontSize(24)},
});
export default HomeTabs;
