"use client"

import { useUser } from "@/hooks/useUser"
import { useSession, useSessionContext } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

interface LikeButtonProps {
  songId: string
}

const LikeButton: React.FC<LikeButtonProps> = ({ songId }) => {
  
  const router = useRouter()

  const { supabaseClient } = useSessionContext()

  const { user } = useUser()

  const [liked, setLiked] = useState(false)

  useEffect(() => {
    if (!user?.id) {
      return
    }
    const fetchLiked = async () => {
      const { data, error } = await supabaseClient
        .from("liked_songs")
        .select("*")
        .eq("user_id", user.id)
        .eq("song_id", songId)
        .single()
      if (!error && data) {
        setLiked(true)
      }
    }

    fetchLiked()
  }, [songId, supabaseClient, user?.id])

  return <>
  <button onClick={() =>{}}>

  </button>
  </>
}

export default LikeButton
