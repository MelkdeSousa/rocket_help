import React from 'react'
import { View } from '../styles'

export type SpaceProps = {
  className?: string
}

export const Space = ({ className }: SpaceProps) => {
  return <View className={className} />
}
