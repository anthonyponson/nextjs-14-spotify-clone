"use client"

import uniqid from "uniqid"
import { FieldValues, set, SubmitHandler, useForm } from "react-hook-form"
import { useUser } from "@/hooks/useUser"
import useUploadModal from "@/hooks/useUploadModal"
import Modals from "./Modals"
import { useState } from "react"
import Input from "./Input"
import Button from "./Button"
import toast from "react-hot-toast"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"

const UploadModal = () => {
  const [isLoading, setIsloading] = useState(false)

  const uploadModal = useUploadModal()

  const { user } = useUser()

  const supabaseClient = useSupabaseClient()

  const router = useRouter()

  const { register, reset, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  })

  const onChange = (open: boolean) => {
    if (!open) {
      reset()
      uploadModal.onClose()
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsloading(true)
      const imageFile = values.image?.[0]
      const songFile = values.song?.[0]

      if (!imageFile || !songFile || !user) {
        toast.error("Missing Fields")
        return
      }

      const uniqueID = uniqid()
      console.log(uniqueID)
      console.log(user)
      console.log('song file ', songFile.type)

      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqueID}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        })

      if (songError) {
        setIsloading(false)
        return toast.error(" failed to upload song")
      }

      // upload image

      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${values.title}-${uniqueID}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          })

      if (imageError) {
        setIsloading(false)
        return toast.error(" failed to upload image")
      }

      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user_id: user.id,
          title: values.title,
          author: values.author,
          image_path: imageData.path,
          song_path: songData.path,
        })

      if (supabaseError) {
        setIsloading(false)
        return toast.error(supabaseError.message)
      }

      router.refresh()
      setIsloading(false)
      toast.success("song uploaded successfully")
      reset()
      uploadModal.onClose()
    } catch (error) {
      toast.error("something went wrong")
    } finally {
      setIsloading(false)
    }
  }

  return (
    <Modals
      title="Add a song"
      description="upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song title"
        />

        <Input
          id="author"
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="Song author"
        />

        <div>
          <div className="mb-1">select a song file</div>
          <Input
            id="song"
            type="file"
            disabled={isLoading}
            accept="audio/*"
            {...register("song", { required: true })}
          />
        </div>

        <div>
          <div className="mb-1">select a Image</div>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>

        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
    </Modals>
  )
}

export default UploadModal
