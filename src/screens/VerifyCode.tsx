import { zodResolver } from '@hookform/resolvers/zod'
import { useRoute } from '@react-navigation/native'
import { HashStraight } from 'phosphor-react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert } from 'react-native'
import { z } from 'zod'
import { ButtonFilled } from '../components/ButtonFilled'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { confirmSignIn } from '../lib/auth'
import { AuthRouteProp } from '../routes/auth.routes'
import useUserStore from '../stores/user.store'
import { KeyboardAvoidingView, Text, View, colors, sizes } from '../styles'

export const verifyCodeSchema = z.object({
  code: z
    .string()
    .nonempty('O campo Código é obrigatório')
    .length(5, 'O campo Código deve ter 5 caracteres')
    .regex(/^[0-9]{5}$/gm, {
      message: 'O campo Código deve conter apenas números',
    }),
})

export type VerifyCodeInput = z.infer<typeof verifyCodeSchema>

export const VerifyCode = () => {
  const route = useRoute<AuthRouteProp<'verifyCode'>>()
  const { setUser } = useUserStore()

  const { user } = route.params

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<VerifyCodeInput>({
    resolver: zodResolver(verifyCodeSchema),
    mode: 'onChange',
  })

  const onSubmit = async ({ code }: VerifyCodeInput) => {
    try {
      const cognitoUser = await confirmSignIn(user, code)

      setUser(cognitoUser)

      return
    } catch (error) {
      console.log(error)

      return Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro com o código de verificação.',
      )
    }
  }

  return (
    <View className="flex-1  bg-gray-600">
      <Header title="Código de verificação" />

      <KeyboardAvoidingView
        contentContainerStyle="flex justify-center p-4"
        overScrollMode="never"
      >
        <View className="w-full items-center">
          <Text className="text-white font-roboto font-bold text-center mb-6 text-xl">
            Informe o código de verificação{'\n'}enviado para você
          </Text>

          <Controller
            control={control}
            name="code"
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Input
                placeholder="Código"
                multiline
                leftElement={
                  <HashStraight
                    color={error ? colors.red[400] : colors.gray[300]}
                    size={sizes[7]}
                  />
                }
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!error}
                errorMessage={error?.message}
              />
            )}
          />
        </View>

        <ButtonFilled
          className="mt-8"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
        >
          <Text className="text-white font-roboto font-medium">Confirmar</Text>
        </ButtonFilled>
      </KeyboardAvoidingView>
    </View>
  )
}
