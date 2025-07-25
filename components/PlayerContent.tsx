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
import { useEffect, useState } from "react"
import useSound from "use-sound"

interface PlayerContentProps {
  song: Song
  songUrl: string
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const player = usePlayer()
  const [volume, setVolume] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const Icon = isPlaying ? BsPauseFill : BsPlayFill
  const VolumeIcon = volume === 0 ? BsVolumeMuteFill : BsVolumeUpFill
  const onPlayNext = () => {
    if (player.ids.length === 0) return

    const currentIndex = player.ids.findIndex((id) => id === player.activeId)
    const nextSong = player.ids[currentIndex + 1]

    if (!nextSong) {
      player.setId(player.ids[0])
    } else {
      player.setId(nextSong)
    }
  }

  const onPlayPrevious = () => {
    if (player.ids.length === 0) {
      return
    }

    const currentindex = player.ids.findIndex((id) => id === player.activeId)
    const PreviousSong = player.ids[currentindex - 1]

    if (!PreviousSong) {
      return player.setId(player.ids[player.ids.length - 1])
    }

    player.setId(PreviousSong)
  }

  const [play, { pause, sound }] = useSound(songUrl, {
    volume: volume,
    onplay: () => setIsPlaying(true),

    onend: () => {
      setIsPlaying(false)
      onPlayNext()
    },
    onpause: () => setIsPlaying(false),
    format: ["mp3"],
  })

  useEffect(() => {
    sound?.play()

    return () => {
      sound?.unload()
    }
  }, [sound])

  const handlePlay = () => {
    if (!isPlaying) {
      play()
    } else {
      pause()
    }
  }

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1)
    } else {
      setVolume(0)
    }
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div
          onClick={handlePlay}
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
        <div
          onClick={handlePlay}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
        >
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
          <VolumeIcon onClick={toggleMute} size={30} color="white" />
          <Slider value={volume} onChange={(value) => setVolume(value)} />
        </div>
      </div>
    </div>
  )
}

export default PlayerContent
