'use client'

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSong from "@/hooks/useLoadSong";
import usePlayer from "@/hooks/userPlayer";
import PlayerContent from "./PlayerContent";

const Player = () => {

  const player = usePlayer()
  
  const {song} = useGetSongById(player.activeId)

  const songUrl = useLoadSong(song!)


  if(!song || !songUrl || !player.activeId){
    return null
  } 
    
  return (
    <>
      <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4"> 
        <PlayerContent song={song} songUrl={songUrl} />
      </div>
    </>
  );
}

export default Player;