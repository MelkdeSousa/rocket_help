import React from 'react'

import { Envelope, Key } from 'phosphor-react-native'
import Logo from '../assets/svg/logo.svg'
import { Input } from '../components/Input'

import { ButtonFilled } from '../components/ButtonFilled'
import { Space } from '../components/Space'
import { KeyboardAvoidingView, Text, View, colors, sizes } from '../styles'

export const SignIn = () => {
  return (
    <KeyboardAvoidingView
      overScrollMode="never"
      className="bg-gray-600 flex-1 px-6 pt-24 flex "
    >
      <View className="flex flex-1  w-full items-center">
        <Logo />

        <Text className=" font-roboto font-bold text-xl text-white mt-20 mb-6">
          Acesse sua conta
        </Text>

        <Input
          placeholder="E-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          enablesReturnKeyAutomatically
          returnKeyType="next"
          leftElement={<Envelope color={colors.gray[300]} size={sizes[7]} />}
        />

        <Space className="h-4" />

        <Input
          textContentType="password"
          enablesReturnKeyAutomatically
          placeholder="Senha"
          returnKeyType="done"
          leftElement={<Key color={colors.gray[300]} size={sizes[7]} />}
          secureTextEntry
        />

        <Space className="h-4" />

        <ButtonFilled>
          <Text className="font-roboto font-bold text-lg text-white">
            Entrar
          </Text>
        </ButtonFilled>
      </View>
    </KeyboardAvoidingView>
  )
}
