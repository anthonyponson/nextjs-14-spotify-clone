"use client"

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react"
import Modals from "./Modals"
import { useRouter } from "next/navigation"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import useAuthModal from "@/hooks/useAuthModal"

const AuthModal = () => {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()
  const { session } = useSessionContext()

  const { onClose, isOpen } = useAuthModal()

  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }
  return (
      <Modals
        title="Test Modal"
        description="Test discription"
        isOpen={isOpen}
        onChange={onChange}
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
