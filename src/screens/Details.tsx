import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import clsx from 'clsx'
import {
  CircleWavyCheck,
  Clipboard,
  DesktopTower,
  Hourglass,
} from 'phosphor-react-native'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { ButtonFilled } from '../components/ButtonFilled'
import { CardDetails } from '../components/CardDetails'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Spinner } from '../components/Spinner'
import { formatDateToWhenText } from '../lib/formatDateToWhenText'
import { OrderSchema } from '../models'
import { Order as OrderModel } from '../models/Order'
import { AppNavigationProp, AppRouteProp } from '../routes/app.routes'
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  colors,
  sizes,
} from '../styles'

export const solutionSchema = z
  .object({
    solution: z
      .string({ required_error: 'O campo Solução é obrigatório' })
      .min(5, 'O campo Solução deve ter pelo menos 5 caracteres'),
  })
  .required()

export type SolutionInput = z.infer<typeof solutionSchema>

export const Details = () => {
  const route = useRoute<AppRouteProp<'details'>>()
  const navigation = useNavigation<AppNavigationProp>()

  const [order, setOrder] = useState<OrderModel | null>(null)
  const [loading, setLoading] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<SolutionInput>({
    resolver: zodResolver(solutionSchema),
  })

  const { orderId } = route.params

  const onSubmit = async (data: SolutionInput) => {
    const order = await DataStore.query(OrderSchema, orderId)

    if (!order) {
      return
    }

    await DataStore.save(
      OrderSchema.copyOf(order, (item) => {
        item.solution = data.solution
        item.closedAt = new Date().toISOString()
        item.updatedAt = new Date().toISOString()
        item.status = 'closed'
      }),
    )

    navigation.navigate('home')
  }

  useEffect(() => {
    setLoading(true)
    DataStore.query(OrderSchema, orderId).then((data) => {
      if (!data) {
        return
      }

      const closed = data.closedAt ? formatDateToWhenText(data.closedAt) : ''

      setOrder({
        status: data.status as OrderModel['status'],
        closed,
        when: formatDateToWhenText(data.createdAt!),
        patrimony: data.patrimony || '',
        id: data.id,
      })
      setLoading(false)
    })
  }, [orderId])

  return (
    <View className="flex-1  bg-gray-700">
      <Header title="Solicitações" />

      {loading && order && <Spinner />}

      {!loading && !!order && (
        <KeyboardAvoidingView
          contentContainerStyle="flex-1"
          overScrollMode="never"
        >
          <View className="flex-row bg-gray-500 justify-center p-4">
            {order.status === 'closed' ? (
              <CircleWavyCheck size={sizes[6]} color={colors.product[300]} />
            ) : (
              <Hourglass size={sizes[6]} color={colors.supporting.secondary} />
            )}

            <Text
              className={clsx('text-sm ml-2 uppercase', {
                'text-product-300': order.status === 'closed',
                'text-supporting-secondary font-roboto font-medium':
                  order.status !== 'closed',
              })}
            >
              {order.status === 'closed' ? 'finalizado' : 'em andamento'}
            </Text>
          </View>

          <View className="p-4 flex-1 justify-between">
            <ScrollView
              showsVerticalScrollIndicator={false}
              overScrollMode="never"
            >
              <CardDetails
                title="equipamento"
                description={`Patrimônio: ${order.patrimony}`}
                icon={DesktopTower}
              />

              <CardDetails
                title="descrição do problema"
                description={order.description}
                icon={Clipboard}
                footer={`Registrado em ${order.when}`}
              />

              <CardDetails
                title="solução"
                description={order.solution}
                icon={CircleWavyCheck}
                footer={order.closed && `Encerrado em ${order.closed}`}
              >
                {!order.solution && (
                  <Controller
                    control={control}
                    name="solution"
                    render={({
                      field: { onChange, onBlur, value },
                      fieldState: { error },
                    }) => (
                      <Input
                        placeholder="Descrição da solução"
                        textAlignVertical="top"
                        multiline
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={!!error}
                        errorMessage={error?.message}
                      />
                    )}
                  />
                )}
              </CardDetails>
            </ScrollView>

            {!order.closed && (
              <ButtonFilled
                onPress={handleSubmit(onSubmit)}
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
              >
                <Text className="text-white font-roboto font-medium">
                  Encerrar solicitação
                </Text>
              </ButtonFilled>
            )}
          </View>
        </KeyboardAvoidingView>
      )}
    </View>
  )
}
