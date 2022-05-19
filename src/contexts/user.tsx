import { 
  createContext, 
  useCallback,
  useContext,
  useState,
  useEffect } from 'react'
import * as M from 'models/user.model'

  type UserContextData = {
    loading: boolean
    users: M.UserModel[] | null
    userSelected: M.UserModel[]
    profiles: M.ProfileModel[] | null
    profileSelected: M.ProfileModel[]

    setLoading(value: boolean): void
    setUsers(value: M.UserModel[]): void
    setUserSelected(value: M.UserModel[]): void
    setProfiles(value: M.ProfileModel[]): void
    setProfileSelected(value: M.ProfileModel[]): void
  }

  export const UserContext = createContext<UserContextData>(
    {} as UserContextData
  )

  export const UserProvider = ({ children }: any) => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState<M.UserModel[]>([])
    const [profiles, setProfiles] = useState<M.ProfileModel[]>([])
    const [userSelected, setUserSelected] = useState<M.UserModel[]>([])
    const [profileSelected, setProfileSelected] = useState<M.ProfileModel[]>([])

    return (
      <UserContext.Provider
        value={{
          loading,
          users,
          userSelected,
          profiles,
          profileSelected,
          setLoading,
          setUsers,
          setUserSelected,
          setProfiles,
          setProfileSelected
        }}
      >
        {children}
      </UserContext.Provider>
    )
  }