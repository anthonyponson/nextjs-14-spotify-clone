"use client"

import { Song } from "@/types/types"
import MediaItem from "./MediaItem"
import LikeButton from "./LikeButton"
import {
  BsPauseFill,
  BsPlayFill,
  BsVolumeMuteFill,
  BsVolumeUpFill,
} from "react-icons/bs"
import { AiFillStepBackward } from "react-icons/ai"
import Slider from "./Slider"
import usePlayer from "@/hooks/userPlayer"
import { useState } from "react"

interface PlayerContentProps {
  song: Song
  songUrl: string
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const player = usePlayer()
  const [volume, setVolume] = useState(1)
  const [ispPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const Icon = true ? BsPauseFill : BsPlayFill

  const VolumeIcon = true ? BsVolumeUpFill : BsVolumeMuteFill

  const onPlay = () => {
    if(player.ids.length === 0){
      return
    }
  }

  return (
    <div className="grid grid-cols-3 md:grid-col-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div
          onClick={() => {}}
          className="h-10 w-10 items-center justify-center rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} color="black" />
        </div>
      </div>

      <div className="hidden md:flex h-full w-full justify-center items-center max-w-[722px] gap-x-6">
        <AiFillStepBackward
          size={30}
          className="text-neutral-400 hover:text-white transition"
          onClick={() => {}}
        />
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer">
          <Icon size={30} color="black" />
        </div>

        <AiFillStepBackward
          size={30}
          className="text-neutral-400 hover:text-white transition"
          onClick={() => {}}
        />
      </div>

      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon onClick={() => {}} size={30} color="white" />
            <Slider />
        </div>
      </div>
    </div>
  )
}

export default PlayerContent
