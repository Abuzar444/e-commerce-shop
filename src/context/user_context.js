import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  const { isAuthenticated, logout, user, isLoading, loginWithRedirect } = useAuth0()
  const [myUser, setMyUser] = useState(null)

  useEffect(() => {
    setMyUser(user)
    // eslint-disable-next-line
  }, [user])

  return (
    <UserContext.Provider value={{ isAuthenticated, logout, user, isLoading, myUser, loginWithRedirect }}>{children}
    </UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
