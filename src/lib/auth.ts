import { CognitoUser } from 'amazon-cognito-identity-js'
import { Auth } from 'aws-amplify'

export const signIn = async (
  usernameOrEmail: string,
  password: string,
): Promise<CognitoUser> => {
  try {
    const user = await Auth.signIn({
      username: usernameOrEmail,
      password,
    })

    console.log('user', user)

    return user
  } catch (error) {
    console.log('error signing in', error)

    throw error
  }
}

export const confirmSignIn = async (
  cognitoUser: CognitoUser,
  code: string,
): Promise<CognitoUser> => {
  try {
    return await Auth.confirmSignIn(cognitoUser, code)
  } catch (error) {
    console.log('error confirming sign in', error)

    throw error
  }
}
