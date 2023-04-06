import React from 'react'

import { ActivityIndicator } from 'react-native'
import colors from 'tailwindcss/colors'
import sizes from '../styles/sizes'

export const Loading = () => {
  return <ActivityIndicator color={colors.white} size={sizes[8]} />
}
