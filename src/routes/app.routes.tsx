import { RouteProp } from '@react-navigation/native'
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { Details } from '../screens/Details'
import { Home } from '../screens/Home'
import { Register } from '../screens/Register'

export type AppParamList = {
  home: undefined
  details: { orderId: string }
  register: undefined
}

export type AppRouteProp<RouteName extends keyof AppParamList> = RouteProp<
  AppParamList,
  RouteName
>

export type AppNavigationProp = NativeStackNavigationProp<AppParamList, 'home'>

const { Navigator, Screen } = createNativeStackNavigator<AppParamList>()

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="details" component={Details} />
      <Screen name="register" component={Register} />
    </Navigator>
  )
}
