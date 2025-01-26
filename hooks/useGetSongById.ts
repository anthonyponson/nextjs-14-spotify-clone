import { useEffect, useState } from "react";

import { useSessionContext } from "@supabase/auth-helpers-react";

import {Song} from '@/types/types'


const useGetSongById = (id?: string) => {

    const [isLoading, setIsLoading] = useState(false);
    const [song, setSong] = useState<Song | null>(null);
    const { supabaseClient } = useSessionContext();

    useEffect(() => {
        if(!id){
            return
        }
        
    }
)
    
}