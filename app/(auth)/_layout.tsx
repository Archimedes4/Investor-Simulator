import { Redirect, Slot, Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  if (true) {
    return <Redirect href={"/sign-in"}/>
  }

  return (
    <Slot />
  );
}
