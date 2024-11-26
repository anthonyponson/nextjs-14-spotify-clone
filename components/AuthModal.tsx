"use client"

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import useAuthModal from "@/hooks/useAuthModal"

import Modals from "./Modals"
import { useEffect } from "react"
const AuthModal = () => {

  const supabaseClient = useSupabaseClient()
  const router = useRouter()
  const { session } = useSessionContext()

  const { onClose, isOpen } = useAuthModal()

  useEffect(() => {
    if(session){
      router.refresh()
      onClose()
    }
  },[session, router, onClose])

  console.log("AuthModal - Modal State:", isOpen); // Log state

  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  } 
  return (
      <Modals
        title="Test Modal"
        description="Test discription"
        isOpen = {isOpen}
        onChange = {onChange}
      >
        <Auth
          supabaseClient={supabaseClient}
          providers={["github"]}
          magicLink
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#404040",
                  brandAccent: "#22c55e",
                },
              },
            },
          }}
        />
      </Modals>

  )
}

export default AuthModal
