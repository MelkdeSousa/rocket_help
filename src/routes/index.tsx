import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'
import { Spinner } from '../components/Spinner'
import { SignIn } from '../screens/SignIn'
import useUserStore from '../stores/user.store'
import { AppRoutes } from './app.routes'

export const Routes = () => {
  const {
    isAuthenticated,
    loadingUser: loading,
    setLoadingUser,
  } = useUserStore()

  useEffect(() => {
    if (!isAuthenticated) setLoadingUser(false)
  }, [isAuthenticated, setLoadingUser])

  if (loading) return <Spinner />

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}
