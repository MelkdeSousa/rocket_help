import { useNavigation } from '@react-navigation/native'
import { StyledProps } from 'nativewind'
import { CaretLeft } from 'phosphor-react-native'
import React from 'react'
import { ViewProps } from 'react-native'
import { Pressable, Text, View, colors, sizes } from '../styles'

export type HeaderProps = {
  title: string
} & StyledProps<ViewProps>

export const Header = ({ title, ...props }: HeaderProps) => {
  const navigation = useNavigation()

  const handleGoBack = () => navigation.goBack()

  return (
    <View
      className="w-full px-6 justify-between items-center bg-gray-600 pb-6 pt-12 flex-row"
      {...props}
    >
      <Pressable
        className="p-2  transition-colors duration-300 ease-in active:bg-gray-500  rounded-md"
        onPress={handleGoBack}
      >
        <CaretLeft size={sizes[6]} color={colors.gray[200]} />
      </Pressable>

      <Text className="font-roboto font-bold text-gray-100 text-center text-lg flex flex-1">
        {title}
      </Text>
    </View>
  )
}
