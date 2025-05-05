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
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai"
import Slider from "./Slider"
import usePlayer from "@/hooks/userPlayer"
import { useState } from "react"
import useSound from "use-sound"

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

  const onPlayNext = () => {
    if(player.ids.length === 0){
      return
    }

    const currentindex = player.ids.findIndex((id) => id === player.activeId)
    const nextSong = player.ids[currentindex + 1]

    if(!nextSong){
      return player.setId(player.ids[0])
    }
    
  }

  const onPlayPrevious = () => {
    if(player.ids.length === 0){
      return
    }

    const currentindex = player.ids.findIndex((id) => id === player.activeId)
    const PreviousSong = player.ids[currentindex - 1]

    if(!PreviousSong){
      return player.setId(player.ids[player.ids.length - 1])
    }

    player.setId(PreviousSong)
    
  }

  const [play, { pause, sound }] = useSound(
    songUrl,
    {
     volume: volume,
      onplay: () => {
        setIsPlaying(true)
      },
      onpause: () => {
        setIsPlaying(false)
      },
      onend: () => {
        setIsPlaying(false)
        onPlayNext()
      },
      onload: () => {
        setVolume(1)
      }
    }

  )

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
          onClick={onPlayPrevious}
        />
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer">
          <Icon size={30} color="black" />
        </div>

        <AiFillStepForward
          size={30}
          className="text-neutral-400 hover:text-white transition"
          onClick={onPlayNext}
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
