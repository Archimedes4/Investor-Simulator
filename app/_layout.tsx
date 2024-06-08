import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { initializeApp } from "firebase/app";
import { useColorScheme } from '@/hooks/useColorScheme';

// Firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9nK5jQAs6bzcNFkL1N_um13smK5R2-38",
  authDomain: "investor-simulator-29aed.firebaseapp.com",
  projectId: "investor-simulator-29aed",
  storageBucket: "investor-simulator-29aed.appspot.com",
  messagingSenderId: "1050022328462",
  appId: "1:1050022328462:web:20ea8e27515dbd672cf1df",
  measurementId: "G-TNJ1976RTX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Slot />
  );
}
