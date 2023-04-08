import React from 'react'
import { View } from '../styles'
import { Loading } from './Loading'

export const Spinner = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Loading />
    </View>
  )
}
