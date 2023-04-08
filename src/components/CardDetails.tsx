import clsx from 'clsx'
import { IconProps } from 'phosphor-react-native'
import React from 'react'
import { Text, View, colors } from '../styles'

export type CardDetailsProps = {
  title: string
  description?: string
  footer?: string
  icon?: React.ElementType<IconProps>
  children?: React.ReactNode
  className?: string
}

export const CardDetails = ({
  title,
  description,
  footer = null,
  icon: Icon,
  children,
  className,
}: CardDetailsProps) => {
  return (
    <View
      className={clsx('bg-gray-600 p-5 mt-5 rounded-md', {
        [className]: !!className,
      })}
    >
      <View className="flex-row items-center mb-4">
        <Icon color={colors.supporting.primary} />
        <Text className="ml-2 text-gray-300 text-sm uppercase font-roboto">
          {title}
        </Text>
      </View>

      {!!description && (
        <Text className="text-gray-100 text-base font-roboto">
          {description}
        </Text>
      )}

      {children}

      {!!footer && (
        <View className="justify-center items-start border-t border-t-gray-400 mt-3">
          <Text className="text-gray-300 text-sm font-roboto mt-3">
            {footer}
          </Text>
        </View>
      )}
    </View>
  )
}
