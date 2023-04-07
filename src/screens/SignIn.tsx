import React from 'react'

import { Envelope, Key } from 'phosphor-react-native'
import Logo from '../assets/svg/logo.svg'
import { Input } from '../components/Input'

import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { ButtonFilled } from '../components/ButtonFilled'
import { Space } from '../components/Space'
import { KeyboardAvoidingView, Text, View, colors, sizes } from '../styles'

import { zodResolver } from '@hookform/resolvers/zod'
import { Alert } from 'react-native'
import { signIn } from '../lib/auth'
import useUserStore from '../stores/user.store'

export const signInSchema = z
  .object({
    email: z
      .string({
        required_error: 'O nome de usuário é obrigatório',
      })
      .min(5, {
        message: 'O nome de usuário precisa ter no mínimo 5 caracteres',
      })
      .toLowerCase(),
    password: z
      .string({
        required_error: 'A senha é obrigatória',
      })
      .min(8, { message: 'A senha precisa ter no mínimo 8 caracteres' }),
  })
  .required()

export type SignInFormData = z.infer<typeof signInSchema>

export const SignIn = () => {
  const { setUser } = useUserStore()

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit = async ({ password, email }: SignInFormData) => {
    try {
      const cognitoUser = await signIn(email, password)

      setUser(cognitoUser)

      return
    } catch (error) {
      console.log(error)

      return Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, verifique seus dados',
      )
    }
  }

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

        <Controller
          control={control}
          name="email"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Input
              placeholder="E-mail"
              textContentType="emailAddress"
              enablesReturnKeyAutomatically
              keyboardType="email-address"
              returnKeyType="next"
              leftElement={
                <Envelope color={colors.gray[300]} size={sizes[7]} />
              }
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!error}
              errorMessage={error?.message}
            />
          )}
        />

        <Space className="h-4" />

        <Controller
          control={control}
          name="password"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Input
              textContentType="password"
              enablesReturnKeyAutomatically
              placeholder="Senha"
              returnKeyType="done"
              leftElement={<Key color={colors.gray[300]} size={sizes[7]} />}
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!error}
              errorMessage={error?.message}
            />
          )}
        />

        <Space className="h-4" />

        <ButtonFilled loading={isSubmitting} onPress={handleSubmit(onSubmit)}>
          <Text className="font-roboto font-bold text-lg text-white">
            Entrar
          </Text>
        </ButtonFilled>
      </View>
    </KeyboardAvoidingView>
  )
}
