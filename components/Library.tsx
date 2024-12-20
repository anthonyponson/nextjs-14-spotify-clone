"use client"

import useAuthModal from "@/hooks/useAuthModal"
import useUploadModal from "@/hooks/useUploadModal"
import { useUser } from "@/hooks/useUser"
import { Song } from "@/types/types"
import { AiOutlinePlus } from "react-icons/ai"
import { TbPlaylist } from "react-icons/tb"
import MediaItem from "./MediaItem"

interface LibraryProps {
  songs: Song[]
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const uploadModal = useUploadModal()
  const authModal = useAuthModal()
  const user = useUser()
  const onClick = () => {
    if (!user?.user) {
      console.log(user, "user in")
      return authModal.onOpen()
    }

    return uploadModal.onOpen()
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-between pt-4 px-5">
          <div className="inline-flex items-center gap-x-2">
            <TbPlaylist className="text-neutral-400" size={24} />
            <p className="text-neutral-400 font-medium text-base">
              Your Library
            </p>
          </div>
          <AiOutlinePlus onClick={onClick} />
        </div>
        <div className="flex flex-col gap-y-2 mt-4 px-3">
          {songs.map((song) => (
            <MediaItem onClick={() => {}} key={song.id} data={song} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Library
