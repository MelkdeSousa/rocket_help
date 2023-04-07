import React from 'react'
import { PressableProps } from 'react-native'
import { Pressable, Text, colors } from '../styles'

export type FilterProps = {
  title: string
  type: 'open' | 'closed'
  isActive?: boolean
} & PressableProps

export function Filter({
  type,
  title,
  isActive = false,
  ...props
}: FilterProps) {
  const colorType =
    type === 'open' ? colors.supporting.secondary : colors.product[300]

  return (
    <Pressable
      className="bg-gray-600 flex-1 flex items-center rounded-sm p-2"
      {...props}
      style={{ borderColor: colorType, borderWidth: isActive ? 1 : 0 }}
    >
      <Text
        className="text-xs uppercase font-roboto"
        style={{ color: isActive ? colorType : colors.gray[300] }}
      >
        {title}
      </Text>
    </Pressable>
  )
}
