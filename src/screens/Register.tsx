import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { ButtonFilled } from '../components/ButtonFilled'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Space } from '../components/Space'
import { OrderSchema } from '../models'
import { AppNavigationProp } from '../routes/app.routes'
import { KeyboardAvoidingView, Text, View } from '../styles'

const registerOrderSchema = z
  .object({
    patrimony: z
      .string({
        required_error: 'Número do patrimônio é obrigatório',
      })
      .regex(/^[0-9]+$/, 'Número do patrimônio deve conter apenas números')
      .min(1, 'Número do patrimônio deve conter no mínimo 1 caractere'),
    description: z
      .string({
        required_error: 'Descrição do problema é obrigatório',
      })
      .min(5, 'Descrição do problema deve conter no mínimo 5 caracteres'),
  })
  .required()

export type RegisterOrderInput = z.infer<typeof registerOrderSchema>

export const Register = () => {
  const navigation = useNavigation<AppNavigationProp>()

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<RegisterOrderInput>({
    resolver: zodResolver(registerOrderSchema),
    reValidateMode: 'onBlur',
    mode: 'onBlur',
    criteriaMode: 'all',
  })

  const onSubmit = async ({ patrimony, description }: RegisterOrderInput) => {
    await DataStore.save(
      new OrderSchema({
        patrimony,
        description,
        status: 'open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }),
    )

    navigation.navigate('home')
  }

  return (
    <View className="flex-1 flex bg-gray-600">
      <Header title="Nova solicitação" />

      <KeyboardAvoidingView className="flex flex-1 px-6">
        <Controller
          control={control}
          name="patrimony"
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <Input
              placeholder="Número do patrimônio"
              wrapperStyle="mt-4"
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
          name="description"
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <Input
              placeholder="Descrição do problema"
              multiline
              textAlignVertical="top"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!error}
              errorMessage={error?.message}
            />
          )}
        />

        <Space className="h-4" />

        <ButtonFilled
          onPress={handleSubmit(onSubmit)}
          loading={isSubmitting}
          disabled={!isValid || isSubmitting}
        >
          <Text className="font-roboto font-bold text-lg text-white">
            Cadastrar
          </Text>
        </ButtonFilled>
      </KeyboardAvoidingView>
    </View>
  )
}
