import { Colors } from '@/constants';
import { Image, StyleSheet, Platform, View, Text, useColorScheme, useWindowDimensions } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const {width, height} = useWindowDimensions()
  return (
    <View style={{
      //backgroundColor: "blue",
      backgroundColor: colorScheme === "light" ? Colors.lightBlue:Colors.darkBlue,
      width, height}}>
      <Text style={{fontSize: 50}}>Hello</Text>
      <Text>{Colors.darkBlue}</Text>
    </View>
  );
}
