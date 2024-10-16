import React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { IoMdClose } from "react-icons/io"

interface ModalPprops {
  isOpen: boolean
  onChange: (open: boolean) => void
  title: string
  description: string
  children: React.ReactNode
}

const Modals: React.FC<ModalPprops> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return <Dialog.Root
  open={isOpen}
  defaultOpen={isOpen}
  onOpenChange={onChange}
  >
    <Dialog.DialogPortal>
      
    </Dialog.DialogPortal>
  </Dialog.Root>
}
export default Modals
