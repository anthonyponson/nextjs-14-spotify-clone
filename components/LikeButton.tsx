"use client"

import { useUser } from "@/hooks/useUser"
import { useSession, useSessionContext } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { HiHeart } from "react-icons/hi"
import AuthModal from "./AuthModal"
import useAuthModal from "@/hooks/useAuthModal"
import toast from "react-hot-toast"
import { error } from "console"

interface LikeButtonProps {
  songId: string
}

const LikeButton: React.FC<LikeButtonProps> = ({ songId }) => {
  const router = useRouter()

  const { supabaseClient } = useSessionContext()

  const { user } = useUser()

  const [liked, setLiked] = useState(false)

  const authModal = useAuthModal()

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

  const handleLike = async () => {
    if (!user) {
      return authModal.onOpen()
    }

    if (liked) {
      const { error } = await supabaseClient
        .from("liked_songs")
        .delete()
        .eq("user_id", user.id)
        .eq("song_id", songId)

      if (error) {
        toast.error("An error occurred")
      } else {
        setLiked(false)
      }
    } else {
      const { error } = await supabaseClient.from("liked_songs").insert({
        user_id: user.id,
        song_id: songId,
      })
 
      if (error) {
        toast.error("An error occurred")
      } else {
        setLiked(true)
      }
    }

    router.refresh()
  }

  const Icon = liked ? AiFillHeart : AiOutlineHeart

  return (
    <>
      <button
        onClick={handleLike}
        className="hover:opacity-75 transition duration-200"
      >
        <Icon color={liked ? "#22c55e" : "white"} size={25} />
      </button>
    </>
  )
}

export default LikeButton
