'use client'

import { AiOutlinePlus } from 'react-icons/ai'
import { TbPlaylist } from 'react-icons/tb'

const Library = () => {
  function onClick() {
    console.log('log')
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
          <AiOutlinePlus
            size={20}
            className='text-neutral-400 cursor-pointer hover:text-white transition'
            onClick={onClick}
          />
        </div>
        <div className='flex flex-col gap-y-2 mt-4 px-3'>
            List of songs
        </div>

      </div>
    </>
  )
}

export default Library
