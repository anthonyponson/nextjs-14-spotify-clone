'use client'

import useAuthModal from '@/hooks/useAuthModal'
import { useUser } from '@/hooks/useUser'
import { AiOutlinePlus } from 'react-icons/ai'
import { TbPlaylist } from 'react-icons/tb'

const Library = () => {

  const authModal = useAuthModal()
  const user = useUser()
const onClick = () => {
  if(!user?.user){
    console.log(user,'user in')
    return authModal.onOpen()
  } 
}
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between pt-4 px-5'>
          <div className='inline-flex items-center gap-x-2'>
            <TbPlaylist className='text-neutral-400' size={24} />
            <p className='text-neutral-400 font-medium text-base'>
              Your Library
            </p>
          </div>
         <button onClick={onClick}>
          hdih
         </button>
        </div>
        <div className='flex flex-col gap-y-2 mt-4 px-3'>
            List of songs
        </div>

      </div>
    </>
  )
}

export default Library
