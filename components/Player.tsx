'use client'

import useGetSongById from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/userPlayer";

const Player = () => {

  const player = usePlayer()
  
  const {song} = useGetSongById(player.activeId)

    
  return (
    <>
      <div> </div>
    </>
  );
}

export default Player;