"use client"

import { Subscription, UserDetails } from "@/types/types"
import { User } from "@supabase/auth-helpers-nextjs"
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




