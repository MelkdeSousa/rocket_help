import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'
import { Spinner } from '../components/Spinner'
import useUserStore from '../stores/user.store'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

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
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
