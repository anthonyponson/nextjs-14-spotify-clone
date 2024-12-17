import { Song } from "@/types/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongs = async (): Promise<Song[]> =>{
    const supabase = createServerComponentClient({cookies: cookies})
    const { data: songs, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false })
    return songs as Song[]
}