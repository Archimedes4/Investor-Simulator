import { View, Text } from 'react-native'
import React from 'react'
import useIsAuth from '@/hooks/useIsAuth'
import { Redirect, Slot } from 'expo-router'

export default function _layout() {
  const { isAuth, isLoading } = useIsAuth()

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (isAuth) {
    return <Redirect href={"/"}/>
  }

  return (
    <Slot />
  )
}