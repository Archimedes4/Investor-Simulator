import { Redirect, Slot, Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import useIsAuth from '@/hooks/useIsAuth';
import { View, Text } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isAuth, isLoading } = useIsAuth()

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (!isAuth) {
    return <Redirect href={"/sign-in"}/>
  }

  return (
    <Slot />
  );
}
