import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { ButtonFilled } from '../components/ButtonFilled'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Space } from '../components/Space'
import { KeyboardAvoidingView, Text, View } from '../styles'

const registerOrderSchema = z.object({
  patrimony: z.string({
    required_error: 'Número do patrimônio é obrigatório',
  }),
  description: z
    .string({
      required_error: 'Descrição do problema é obrigatório',
    })
    .min(5, 'Descrição do problema deve conter no mínimo 5 caracteres'),
})

export type RegisterOrderInput = z.infer<typeof registerOrderSchema>

export const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterOrderInput>({
    resolver: zodResolver(registerOrderSchema),
  })

  const onSubmit = async ({ patrimony, description }: RegisterOrderInput) => {
    console.log({ patrimony, description })
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

        <ButtonFilled onPress={handleSubmit(onSubmit)} loading={isSubmitting}>
          <Text className="font-roboto font-bold text-lg text-white">
            Cadastrar
          </Text>
        </ButtonFilled>
      </KeyboardAvoidingView>
    </View>
  )
}
