'use client'

import { useRouter } from 'next/navigation'
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import { BiChevronLeft, BiSearch } from 'react-icons/bi'
import { FaChevronLeft, FaChevronRight, FaHome, FaSearch } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'
import Button from './Button'

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter()

  const handleLogout = () => {
    //
  }
 
  return (
    <>
      <div className={twMerge(`h-fit p-3`, className)}>
        <div className='flex items-center justify-between w-full mb-4 '>
          <div className='hidden md:flex gap-x-4 items-center'>
            <button
              onClick={() => router.back()}
              className='bg-black p-2 rounded-full'
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => router.forward()}
              className='bg-black p-2 rounded-full'
            >
              <FaChevronRight />
            </button>
          </div>

          <div className='flex md:hidden gap-x-2 items-center'>
            <button className='bg-white rounded-full p-2 flex items-center justify-center hover:opacity-75 transition'>
              <AiFillHome size={20} color='black' />
            </button>
            <button className='bg-white rounded-full p-2 flex items-center justify-center hover:opacity-75 transition'>
              <BiSearch size={20} color='black' />
            </button>
          </div>

          <div className='flex justify-between items-center gap-x-4'>
            <>
              <div>
                <Button onClick={() => {}} className='bg-transparent'>
                  Sign Up
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => {}}
                  className='bg-white px-6 py-2 text-black'
                >
                  Log in
                </Button>
              </div>
            </>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

export default Header
