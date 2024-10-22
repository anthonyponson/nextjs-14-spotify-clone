import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalPprops {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modals: React.FC<ModalPprops> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.DialogPortal>
        <Dialog.Overlay className="bg-neutral-900/90 back backdrop-blur-sm fixed inset-0 ">
          <Dialog.Content className=" fixed drop-shadow-sm border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px]">
            <p>hdilvhvi</p>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
};
export default Modals;
