


import {Song} from '@/types/types'
interface LinkContentProps {
songs: Song[]
}

const LinkContent:React.FC<LinkContentProps> = ({songs}) => {
  return (
    <>
      <div>LinkContent</div>
    </>
  );
}

export default LinkContent;