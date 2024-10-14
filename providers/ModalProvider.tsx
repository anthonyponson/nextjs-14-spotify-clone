"use client"

import Modals from "@/components/Modals"
import { useEffect, useState } from "react"

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <>
      <Modals
        title="Test Modal"
        description="Test discription"
        isOpen
        onChange={() => {}}
      >
        Test Children
      </Modals>
    </>
  )
}

export default ModalProvider
