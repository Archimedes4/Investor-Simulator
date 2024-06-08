import { View, Text, useWindowDimensions, useColorScheme } from 'react-native'
import React from 'react'
import AppleSignIn from '@/components/AppleSignIn.tsx'
import { Colors } from '@/constants'
import GoogleSignIn from '@/components/GoogleSignIn/index.web'

export default function signIn() {
  const {width, height} = useWindowDimensions()
  const colorScheme = useColorScheme()
  return (
    <View style={{backgroundColor: colorScheme === 'light' ? Colors.lightBlue:Colors.darkBlue, width, height}}>
      <Text style={{marginHorizontal: 'auto'}}>Welcome</Text>
      <AppleSignIn />
      <GoogleSignIn />
    </View>
  )
}