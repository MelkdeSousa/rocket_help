import {
  Roboto_400Regular as Roboto,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { Spinner } from './components/Spinner'
import { Routes } from './routes'

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto,
  })

  return (
    <>
      <StatusBar style="light" translucent animated />

      {!fontsLoaded ? <Spinner /> : <Routes />}
    </>
  )
}

export default App
