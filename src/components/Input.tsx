import React from 'react'

import { styled } from 'nativewind'
import { TextInputProps, ViewProps } from 'react-native'
import { TextInput, View } from '../styles'
import colors from '../styles/colors'

export type InputProps = {
  leftElement?: React.ReactNode
  rightElement?: React.ReactNode
  wrapperStyle?: ViewProps['style']
} & TextInputProps

export const Input = styled(
  ({ leftElement, rightElement, wrapperStyle, ...props }: InputProps) => {
    return (
      <View
        className="bg-gray-700 w-full flex flex-row border-0 rounded-md items-start p-4 focus:border focus:border-product-500 focus:border-spacing-1"
        style={wrapperStyle}
      >
        {leftElement}

        <TextInput
          className="bg-gray-700 text-base px-4 font-roboto font-medium text-white"
          placeholderTextColor={colors.gray[300]}
          cursorColor={colors.gray[300]}
          {...props}
        />

        {rightElement}
      </View>
    )
  },
  {
    props: {
      wrapperStyle: true,
    },
  },
)
