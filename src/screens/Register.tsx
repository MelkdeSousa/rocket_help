import React from 'react'
import { ButtonFilled } from '../components/ButtonFilled'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Space } from '../components/Space'
import { Text, View, sizes } from '../styles'

export const Register = () => {
  return (
    <View className="flex-1 bg-gray-600">
      <Header title="Nova solicitação" />

      <View className="flex flex-1 px-6">
        <Input
          placeholder="Número do patrimônio"
          wrapperStyle={{ marginTop: sizes[4] }}
        />

        <Space className="h-4" />

        <Input
          placeholder="Descrição do problema"
          multiline
          textAlignVertical="top"
          wrapperStyle={{ flex: 1, height: '100%' }}
        />

        <Space className="h-4" />

        <ButtonFilled>
          <Text className="font-roboto font-bold text-lg text-white">
            Cadastrar
          </Text>
        </ButtonFilled>
      </View>
    </View>
  )
}
