import { StyledProps } from 'nativewind'
import { CaretLeft } from 'phosphor-react-native'
import React from 'react'
import { ViewProps } from 'react-native'
import { Pressable, Text, View, colors, sizes } from '../styles'

export type HeaderProps = {
  title: string
} & StyledProps<ViewProps>

export const Header = ({ title, ...props }: HeaderProps) => {
  return (
    <View
      className="w-full justify-between items-center bg-gray-600 pb-6 pt-12 flex-row"
      {...props}
    >
      <Pressable>
        <CaretLeft size={sizes[6]} color={colors.gray[200]} />
      </Pressable>

      <Text className="font-roboto font-bold text-gray-100 text-center text-lg flex flex-1 -ml-5">
        {title}
      </Text>
    </View>
  )
}
