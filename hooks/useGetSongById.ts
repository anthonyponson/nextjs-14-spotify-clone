import { useEffect, useMemo, useState } from "react"

import { useSessionContext } from "@supabase/auth-helpers-react"

import { Song } from "@/types/types"
import { set } from "react-hook-form"
import toast from "react-hot-toast"

const useGetSongById = (id?: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [song, setSong] = useState<Song | null>(null)
  const { supabaseClient } = useSessionContext()

  useEffect(() => {
    if (!id) {
      return
    }
    setIsLoading(true)

    const fetchSong = async () => {
      const { data, error } = await supabaseClient
        .from("songs")
        .select("*")
        .eq("id", id)
        .single()

      if (error) {
        setIsLoading(false)
        return toast.error
      }
      setSong(data as Song)
      setIsLoading(false)
    }

    fetchSong()
  }, [id, supabaseClient])

  return useMemo(
    () => ({
      isLoading,
      song,
    }),
    [isLoading, song]
  )
}

export default useGetSongById
