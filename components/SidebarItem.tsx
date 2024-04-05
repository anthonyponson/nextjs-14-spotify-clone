import Link from 'next/link'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface SidebarItemProps {
  icon: IconType
  label: string
  active?: boolean
  href: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <>
      <Link
        href={href}
        className={twMerge(
          `flex items-center h-auto w-full gap-x-4 text-base font-medium cursor-pointer hover:text-white transition text-neutral-400 py-2`,
          active && 'text-white'
        )}
      >
        <Icon size={24} />
        <p className='truncate w-100'>{label}</p>
      </Link>
    </>
  )
}

export default SidebarItem
