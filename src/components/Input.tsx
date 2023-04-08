import React from 'react'

import clsx from 'clsx'
import { styled } from 'nativewind'
import { TextInputProps, ViewProps } from 'react-native'
import { Text, TextInput, View } from '../styles'
import colors from '../styles/colors'

export type InputProps = {
  leftElement?: React.ReactNode
  rightElement?: React.ReactNode
  wrapperStyle?: ViewProps['style']
  error?: boolean
  errorMessage?: string
} & TextInputProps

export const Input = styled(
  ({
    leftElement,
    rightElement,
    wrapperStyle,
    error = false,
    errorMessage = '',
    ...props
  }: InputProps) => {
    return (
      <View className="w-full flex">
        <View
          className={clsx(
            'bg-gray-700  flex-row border rounded-md items-start p-4   ',
            {
              'border-red-400': error,
              'border-gray-700 focus:border-product-500 focus:border-spacing-1':
                !error,
            },
          )}
          style={wrapperStyle}
        >
          {leftElement}

          <TextInput
            className={clsx(
              'bg-gray-700 text-base px-4 font-roboto font-medium text-white',
              {
                'text-red-400': error,
                [props.className]: !!props.className,
              },
            )}
            placeholderTextColor={error ? colors.red[400] : colors.gray[300]}
            cursorColor={colors.gray[300]}
            {...props}
          />

          {rightElement}
        </View>

        {error && (
          <Text className="text-red-400 mt-1 text-xs font-roboto font-medium">
            {errorMessage}
          </Text>
        )}
      </View>
    )
  },
  {
    props: {
      wrapperStyle: true,
    },
  },
)
