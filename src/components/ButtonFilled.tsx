import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { TouchableOpacity } from '../styles'

export type ButtonFilledProps = TouchableOpacityProps

export const ButtonFilled = (props: ButtonFilledProps) => {
  return (
    <TouchableOpacity
      className="w-full bg-product-700 items-center p-4 rounded-md"
      {...props}
    />
  )
}
