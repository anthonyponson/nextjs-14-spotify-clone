"use client"

import { Subscription, UserDetails } from "@/types/types"
import { User } from "@supabase/auth-helpers-nextjs"
import { useSessionContext, useUser as useSupaUser } from "@supabase/auth-helpers-react"
import { createContext } from "react"

type UserContextType = {
  accessToken: string | null
  user: User | null
  userDetails: UserDetails | null  
  isLoading: boolean  
  subscription: Subscription | null
}

export const userContext = createContext<UserContextType | undefined>(
  undefined
)

export interface  Props {
  [propName: string] : any
}

export const MyUserContextProvider = (props: Props) =>{
  const {session,isLoading:isLoadinUser,supabaseClient: supabase} =useSessionContext()
  const user = 
}




