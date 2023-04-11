import { RouteProp } from '@react-navigation/native'
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { CognitoUser } from 'amazon-cognito-identity-js'
import { SignIn } from '../screens/SignIn'
import { VerifyCode } from '../screens/VerifyCode'

export type AuthParamList = {
  signIn: undefined
  verifyCode: { user: CognitoUser }
}

export type AuthRouteProp<RouteName extends keyof AuthParamList> = RouteProp<
  AuthParamList,
  RouteName
>

export type AuthNavigationProp<RouteName extends keyof AuthParamList> =
  NativeStackNavigationProp<AuthParamList, RouteName>

const { Navigator, Screen } = createNativeStackNavigator<AuthParamList>()

export const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="verifyCode" component={VerifyCode} />
    </Navigator>
  )
}
