import { Song } from "@/types/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadSong = (song:Song) => {
    const supabaseclient = useSupabaseClient()

    if(!song){
        return ''
    }

    const {data: songData} = supabaseclient.storage
    .from("songs")
    .getPublicUrl(song.song_path)

    return songData.publicUrl
}


export default useLoadSong
 