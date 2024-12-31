import getSongsByTitle from "@/actions/getSongsByTitle"
import ListItem from "@/components/ListItem"
import PageContent from "../(site)/components/PageContent"
import Header from "@/components/Header"
import SearchInput from "@/components/SearchInput"
import SearchContent from "./components/SearchContent"

interface SearchProps {
  searchParams: {
    title: string
  }
}

const Search = async ({ searchParams }: SearchProps) => {
  
  const songs = await getSongsByTitle(searchParams.title)

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mt-2">
          <h2 className="text-2xl font-semibold">Search</h2>
          <SearchInput />
        </div>
      </Header>

      <SearchContent songs={songs} />
    </div>
  )
}

export default Search
