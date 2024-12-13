"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useUploadModal from "@/hooks/useUploadModal"
import Modals from "./Modals"
import { useState } from "react"
import Input from "./Input"
const UploadModal = () => {
  const [isLoading, setIsloading] = useState()
  const uploadModal = useUploadModal()

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
      uploadModal.onClose()
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {}

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
      </form>

      <div>
        
        <div className="mb-1">
        select a song file
        </div>
        <Input
          id="song"
          type="file"
          disabled={isLoading}
          accept="mp3"
          {...register("song", { required: true })}
      
        />
      </div>
    </Modals>
  )
}

export default UploadModal
