"use client"

import { useRouter } from "next/navigation"
import { AiFillHome, AiOutlineSearch } from "react-icons/ai"
import { BiChevronLeft, BiSearch } from "react-icons/bi"
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaSearch,
  FaUserAlt,
} from "react-icons/fa"
import { twMerge } from "tailwind-merge"
import Button from "./Button"
import useAuthModal from "@/hooks/useAuthModal"

import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useUser } from "@/hooks/useUser"
import toast from "react-hot-toast"

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const authModal = useAuthModal()
  const router = useRouter()

  const supabaseClient = useSupabaseClient()

  const { user, subscription } = useUser()

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut()
    router.refresh()

    if (error) {
      toast.error(error.message)
    } else{
      toast.success('logged out')
    }
  }

  return (
    <>
      <div className={twMerge(`h-fit p-3`, className)}>
        <div className="flex items-center justify-between w-full mb-4 ">
          <div className="hidden md:flex gap-x-4 items-center">
            <button
              onClick={() => router.back()}
              className="bg-black p-2 rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => router.forward()}
              className="bg-black p-2 rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="flex md:hidden gap-x-2 items-center">
            <button className="bg-white rounded-full p-2 flex items-center justify-center hover:opacity-75 transition">
              <AiFillHome size={20} color="black" />
            </button>
            <button className="bg-white rounded-full p-2 flex items-center justify-center hover:opacity-75 transition">
              <BiSearch size={20} color="black" />
            </button>
          </div>

          <div className="flex justify-between items-center gap-x-4">
            {user ? (
              <div className="flex items-center gap-x-2">
                <Button className="bg-white px-6 py-2 text-gray-950 " onClick={handleLogout}>
                  Logout
                </Button>
                <Button className="bg-emerald-400" onClick={() => router.push("/account")}>
                  <FaUserAlt color="black" />
                </Button>
              </div>
            ) : (
              <>
                <div>
                  <Button
                    onClick={() => {
                      console.log("Button clicked")
                      authModal.onOpen()
                    }}
                    className="bg-transparent"
                  >
                    Sign Up
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={authModal.onOpen}
                    className="bg-white px-6 py-2 text-black"
                  >
                    Log in
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

export default Header
