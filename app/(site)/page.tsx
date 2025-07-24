import Header from "@/components/Header"
import ListItem from "@/components/ListItem"
import Image from "next/image"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { createBrowserClient, createServerClient } from "@supabase/ssr"
import getSongs from "@/actions/getSongs"
import PageContent from "./components/PageContent"
import { Lilita_One } from "next/font/google"
export const revalidate = 0
export default async function Home() {
  const songs = await getSongs()
  return (
    <div className="bg-neutral-900 h-full w-full rounded-lg overflow-hidden overflow-y-auto pr-4 sm:pr-6 md:pr-8 lg:pr-10">
      <Header>
        <div className="mt-2">
          <h2 className="text-2xl font-semibold">welcome back</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem name="Liked Songs" href="/liked"  />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text2xl font-semibold">Newest Songs</h1>
        </div>
        <div>
         <PageContent songs={songs} />
        </div>
      </div>

      
    </div>
  )
}
