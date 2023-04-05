import {
  Roboto_400Regular as Roboto,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View className="bg-gray-700 flex flex-1 items-center justify-center">
      <StatusBar style="inverted" />
    </View>
  )
}
