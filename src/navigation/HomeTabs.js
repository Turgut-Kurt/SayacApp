import {
  BillsScreen,
  HousesScreen,
  SettingsScreen,
  StatusScreen,
} from '~screens';
import {
  Feed,
  FeedActive,
  Friends,
  FriendsActive,
  Messages,
  MessagesActive,
  Settings,
  SettingsActive,
} from '~assets';
import {StyleSheet, Text} from 'react-native';

import React from 'react';
import VectorImage from 'react-native-vector-image';
import {colors} from '~/components/config';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {fontSize} from '~utils';
import {homeTabs} from '~/config/navigators';

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor={colors.Pink}
      inactiveColor={colors.Gray}
      barStyle={styles.barStyle}>
      <Tab.Screen
        name={homeTabs.houses}
        component={HousesScreen}
        options={{
          tabBarLabel: <Text>Haneler</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={focused ? FeedActive : Feed}
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
              source={focused ? FriendsActive : Friends}
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
              style={[styles.svgStyle, {backgroundColor: 'red'}]}
              source={focused ? MessagesActive : Messages}
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
              source={focused ? SettingsActive : Settings}
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
