"use client"

import { User } from "@supabase/auth-helpers-nextjs"

import { Subscription, UserDetails } from "@/types/types"
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react"
import { createContext, useEffect, useState } from "react"

type userContextType = {
  accessToken: string | null
  user: User | null
  userDetails: UserDetails | null
  isLoading: boolean
  subscription: Subscription | null
}
export const UserContext = createContext<userContextType | undefined>(undefined)

export interface Props {
  [propName: string]: any
}

export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext()

  const user = useSupaUser()
  const accessToken = session?.access_token ?? null
  const [isLoadingData, setIsLoadingData] = useState(false)
  const [userDetails, setSserDetails] = useState<UserDetails | null>(null)
  const [subscription, setSubscription] = useState()

  const getUserDetails = () => supabase.from("users").select("*").single()
  
  const getSubscription = () =>
    supabase
      .from("subscriptions")
      .select("* , prices(*,products(*))")
      .in("status", ["trialing", "active"])

      useEffect(() => {
        if(user && !isLoadingData &&!userDetails && !subscription){
          setIsLoadingData(true)
          Promise.allSettled([getUserDetails(), getSubscription()]).then(
            (results) => {
              const userDetailsPromise = results[0]
              const subscriptionDetails = results[1]
            }
          )
        }
      })
}
