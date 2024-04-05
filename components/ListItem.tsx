'use client'
import Image from 'next/image'
import Liked from '../public/liked.jpg'
import { useRouter } from 'next/navigation'
import { FaPlay } from 'react-icons/fa'
interface ListItemProps {
  name: string
  href: string
}
const ListItem: React.FC<ListItemProps> = ({ name, href }) => {
  const router = useRouter()
  const onCLick = () => {
    // add authentican
    router.push(href)
  }
  return (
    <>
      <div className='relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4'>
        <div className='relative min-h-[64px] min-w-[64px] '>
          <Image className='object-cover' fill src={Liked} alt='image' />
        </div>
        <p className='text-base font-semibold truncate py-5'>{name}</p>
        <div className='absolute transition opacity-0 rounded-full flex items-center justify-center p-4 bg-green-500 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110'>
          <FaPlay className='text-black' />
        </div>
      </div>
    </>
  )
}

export default ListItem
