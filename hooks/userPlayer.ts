import { create } from "zustand"

interface PlayerStore {
  ids: string[]
  activId: string
  setId: (id: string) => void
  setIds: (ids: string[]) => void
  reset: () => void
}

const useplayer = create<PlayerStore>((set) => ({
  ids: [],
  activId: "",
  setId: (id: string) => set({ activId: id }),
  setIds: (ids: string[]) => set({ ids }),
  reset: () => set({ ids: [], activId: undefined }),
}))


export default useplayer 