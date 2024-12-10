'use client'

import useUploadModal from "@/hooks/useUploadModal"
import Modals from "./Modals"
const UploadModal = () => {
  const uploadModal = useUploadModal()
  const onChange = (open: boolean) => {
    if (!open) {
      uploadModal.onClose()
    }
  }

  return (
    <Modals
      title="Add a song"
      description="upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      form
    </Modals>
  )
}

export default UploadModal
