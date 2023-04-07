import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { TouchableOpacity } from '../styles'
import { Loading } from './Loading'

export type ButtonFilledProps = TouchableOpacityProps & {
  loading?: boolean
}

export const ButtonFilled = ({
  children,
  loading = false,
  onPress,
  ...props
}: ButtonFilledProps) => {
  return (
    <TouchableOpacity
      className="w-full bg-product-700 items-center p-4 rounded-md"
      disabled={loading}
      onPress={loading ? undefined : onPress}
      style={{
        opacity: loading ? 0.5 : 1,
      }}
      {...props}
    >
      {loading && <Loading />}
      {!loading && children}
    </TouchableOpacity>
  )
}
