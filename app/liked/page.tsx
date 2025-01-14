import getLikedSongs from "@/actions/getLikedSongs"
import Header from "@/components/Header"
import Image from "next/image"
import LinkContent from "./components/LinkContent"

const revalidate = 0
const Liked = async () => {
  const songs = await getLikedSongs()

  return (
    <div className="bg-neutral-900 h-full w-full rounded-lg overflow-hidden overflow-y-auto ">
      <Header>
        <div className="mt-20 flex flex-col items-center md:flex-row gap-x-5">
          <div className="relative h-32 w-32 md:h-44 md:w-44 ">
            <Image
              src="/liked.jpg"
              alt="Liked Songs"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
            <p className="hidden md:block font-semibold">
              playlist
            </p>
            <h1 className="text-2xl font-bold md:text-3xl">Liked Songs</h1>
          </div>
        </div>
      </Header>

      <LinkContent songs={songs}/>
    </div>
  )
}

export default Liked
