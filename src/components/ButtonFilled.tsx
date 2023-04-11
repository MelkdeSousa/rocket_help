import clsx from 'clsx'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Pressable } from '../styles'
import { Loading } from './Loading'

export type ButtonFilledProps = TouchableOpacityProps & {
  loading?: boolean
}

export const ButtonFilled = ({
  children,
  loading = false,
  onPress,
  disabled = false,
  className = '',
  ...props
}: ButtonFilledProps) => {
  return (
    <Pressable
      className={clsx('w-full bg-product-700 items-center p-4 rounded-md', {
        'opacity-60 transition-opacity ease-in duration-200':
          loading || disabled,
        [className]: !!className,
      })}
      onPress={loading || disabled ? undefined : onPress}
      {...props}
    >
      {loading && <Loading />}
      {!loading && children}
    </Pressable>
  )
}
