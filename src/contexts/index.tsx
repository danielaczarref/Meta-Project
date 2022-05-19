import React from 'react'
import { UserProvider } from './user'

type ContextProps = {
  children: React.ReactNode
}

const AppProvider = ({ children }: ContextProps) => (
  <UserProvider>
    {children}
  </UserProvider>
)

export default AppProvider
