import React, { useState } from 'react'
import { Pressable, Text, View, colors, sizes } from '../styles'

import { useNavigation } from '@react-navigation/native'
import { ChatTeardropText, SignOut } from 'phosphor-react-native'
import { FlatList } from 'react-native'
import Logo from '../assets/svg/log_secondary.svg'
import { ButtonFilled } from '../components/ButtonFilled'
import { Filter } from '../components/Filter'
import { Order } from '../components/Order'
import { Space } from '../components/Space'
import { Order as OrderModel } from '../models/Order'
import { AppNavigationProp } from '../routes/app.routes'

export const Home = () => {
  const navigation = useNavigation<AppNavigationProp>()
  const [selectedStatus, setSelectedStatus] = useState<'open' | 'closed'>(
    'open',
  )

  const [orders] = useState<OrderModel[]>([
    {
      id: '1',
      status: 'open',
      when: '2022-05-02T12:00:00.000Z',
      patrimony: '1234',
    },
  ])

  const handleNewOrder = () => navigation.navigate('register')

  const handleOpenDetails = (orderId: string) => () =>
    navigation.navigate('details', { orderId })

  return (
    <View className="flex flex-1 pb-6 bg-gray-700">
      <View className="w-full flex-row justify-between items-center bg-gray-600 pt-12 pb-5 px-6">
        <Logo />

        <Pressable className="p-2  transition-colors duration-300 ease-in active:bg-gray-500  rounded-md">
          <SignOut size={sizes[6]} color={colors.gray[300]} />
        </Pressable>
      </View>

      <View className="flex-1 flex px-6">
        <View className="w-full mt-8 mb-4 flex-row justify-between items-center">
          <Text className="font-roboto text-gray-100 text-xl font-medium">
            Solicitações
          </Text>
          <Text className="font-roboto text-gray-200 text-base font-normal">
            {orders.length}
          </Text>
        </View>

        <View className="flex flex-row mb-8">
          <Filter
            title="em andamento"
            type="open"
            onPress={() => setSelectedStatus('open')}
            isActive={selectedStatus === 'open'}
          />
          <Space className="w-3" />
          <Filter
            title="finalizados"
            type="closed"
            onPress={() => setSelectedStatus('closed')}
            isActive={selectedStatus === 'closed'}
          />
        </View>

        <FlatList
          data={orders}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Order data={item} onPress={handleOpenDetails(item.id)} />
          )}
          overScrollMode="never"
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          ListEmptyComponent={() => (
            <View className="flex-1 items-center justify-center">
              <ChatTeardropText color={colors.gray[300]} size={sizes[8]} />

              <Text className="font-roboto  text-xl text-gray-300 mt-2 text-center">
                Você ainda não possui {'\n'}
                solicitações{' '}
                {selectedStatus === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </View>
          )}
        />

        <ButtonFilled onPress={handleNewOrder}>
          <Text className="font-roboto font-bold text-lg text-white">
            Nova solicitação
          </Text>
        </ButtonFilled>
      </View>
    </View>
  )
}
