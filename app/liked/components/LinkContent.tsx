"use client"

import LikeButton from "@/components/LikeButton"
import MediaItem from "@/components/MediaItem"
import { useUser } from "@/hooks/useUser"
import { Song } from "@/types/types"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
interface LinkContentProps {
  songs: Song[]
}

const LinkContent: React.FC<LinkContentProps> = ({ songs }) => {
  const router = useRouter()

  const { isLoading, user } = useUser()

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/")
    }
  }, [isLoading, user, router])

  if (songs.length === 0) {
    return (
      <div className="flex items-center justify-center h-1/2">
        <p className="text-lg">No songs found</p>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
        {songs.map((song) => (
          <div key={song.id} className="flex items-center gap-x-2">
            <div className="flex-1">
              <MediaItem onClick={() => {}} data={song} />
            </div>
            <LikeButton songId={song.id} />
          </div>
        ))}
      </div>
    </>
  )
}

export default LinkContent
