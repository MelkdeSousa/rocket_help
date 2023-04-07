import { CognitoUser } from 'amazon-cognito-identity-js'
import { Auth } from 'aws-amplify'

export const signIn = async (
  username: string,
  password: string,
): Promise<CognitoUser> => {
  try {
    return await Auth.signIn({
      username,
      password,
    })
  } catch (error) {
    console.log('error signing in', error)

    throw error
  }
}
