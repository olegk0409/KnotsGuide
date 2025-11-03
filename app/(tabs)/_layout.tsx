import React from 'react';
import { Tabs } from 'expo-router';
import CustomTabBar from '@/src/tabBar/CustomTabBar';


export default function TabLayout() {

  return (
    <Tabs 
      screenOptions={{headerShown: false}}
      tabBar={(props) => <CustomTabBar {...props} />}>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="quiz" />
        <Tabs.Screen name="fav" />
        <Tabs.Screen name="settings" />
    </Tabs>
  );
}