"use client"

import { Song } from "@/types/types"

interface SongItemProps {
  data: Song[]
  onclick: (id: string) => void
}
const SongItem: React.FC<SongItemProps> = ({ data, onclick }) => {
  return (
    <>
      <div></div>
    </>
  )
}

export default SongItem
