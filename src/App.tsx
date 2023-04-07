import {
  Roboto_400Regular as Roboto,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { Loading } from './components/Loading'
import { Home } from './screens/Home'
import { View } from './styles'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto,
  })

  return (
    <>
      <StatusBar style="light" translucent animated />

      {!fontsLoaded ? (
        <View className="bg-gray-600 flex flex-1 justify-center items-center">
          <Loading />
        </View>
      ) : (
        <Home />
      )}
    </>
  )
}
