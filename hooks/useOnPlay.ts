import { Song } from "@/types/types"
import usePlayer from "./userPlayer"

import useAuthModal from "@/hooks/useAuthModal"
import useGetSongById from "./useGetSongById"

import { useUser } from "@/hooks/useUser"

const useOnPlayer = (songs: Song[]) => {
    const player = usePlayer()
    const authModal = useAuthModal()
    const {user} = useUser()

    const onPlay = (id:string)=> {
        if(!user){
            return authModal.onOpen()
        }

        player.setId(id)
        player.setIds(songs.map((song) => song.id))
    }



}

export default useOnPlayer