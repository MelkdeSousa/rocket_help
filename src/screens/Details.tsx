import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Header } from '../components/Header'
import { AppRouteProp } from '../routes/app.routes'
import { Text, View } from '../styles'

export const Details = () => {
  const route = useRoute<AppRouteProp<'details'>>()

  const { orderId } = route.params

  return (
    <View className="flex-1  bg-gray-700">
      <Header title="Solicitações" />

      <Text className="text-gray-200 text-xl mt-6">{orderId}</Text>
    </View>
  )
}
