import { CognitoUser, UserData } from 'amazon-cognito-identity-js'

export const mapCognitoUserToUser = async (
  data: CognitoUser,
): Promise<UserData> =>
  new Promise((resolve, reject) => {
    data.getUserData((err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
