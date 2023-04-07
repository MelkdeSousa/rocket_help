import {
  CircleWavyCheck,
  ClockAfternoon,
  Hourglass,
} from 'phosphor-react-native'
import React from 'react'
import { PressableProps } from 'react-native'
import { Order as OrderModel } from '../models/Order'
import { Pressable, Text, View, colors, sizes } from '../styles'

export type OrderProps = {
  data: OrderModel
} & PressableProps

export const Order = ({ data, ...props }: OrderProps) => {
  const statusColor =
    data.status === 'open' ? colors.supporting.secondary : colors.product[300]

  return (
    <Pressable {...props}>
      <View className="flex flex-row bg-gray-600 mb-4 items-center justify-between rounded-md overflow-hidden">
        <View className="h-full w-2" style={{ backgroundColor: statusColor }} />

        <View className="flex flex-1 my-5 ml-5">
          <Text className="font-roboto text-white text-base">
            Patrimônio {data.patrimony}
          </Text>

          <View className="flex flex-row items-center">
            <ClockAfternoon size={sizes[6]} color={colors.gray[300]} />

            <Text className="font-roboto text-gray-200 text-xs ml-1">
              {data.when}
            </Text>
          </View>
        </View>

        <View className="flex items-center justify-center bg-gray-500 h-12 w-12 mr-5 rounded-full">
          {data.status === 'closed' ? (
            <CircleWavyCheck size={sizes[6]} color={statusColor} />
          ) : (
            <Hourglass size={sizes[6]} color={statusColor} />
          )}
        </View>
      </View>
    </Pressable>
  )
}
