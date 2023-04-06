import React from 'react'

import { TextInputProps } from 'react-native'
import { TextInput, View } from '../styles'
import colors from '../styles/colors'

export type InputProps = {
  leftElement?: React.ReactNode
  rightElement?: React.ReactNode
} & TextInputProps

export const Input = ({ leftElement, rightElement, ...props }: InputProps) => {
  return (
    <View className="bg-gray-700 flex flex-row border-0 rounded-md items-center px-4 focus:border focus:border-product-500 focus:border-spacing-1">
      {leftElement}

      <TextInput
        className="bg-gray-700 h-14 text-base w-full p-4 font-roboto font-medium text-white"
        placeholderTextColor={colors.gray[300]}
        cursorColor={colors.gray[300]}
        {...props}
      />

      {rightElement}
    </View>
  )
}
