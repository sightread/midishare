import { Search as SearchIcon } from "@/icons"
export type SearchBoxProps = { onSearch: (val: string) => void }

export function Search({ onSearch }: SearchBoxProps) {
  return (
    <>
      <div className="flex relative h-12 min-h-[48px] w-full border border-solid border-violet-600 rounded-xl bg-white">
        <input
          type="search"
          onChange={(e: any) => onSearch(e.target.value)}
          placeholder="Search by title"
          className="w-full h-full min-h-full pl-5 rounded-tl-xl rounded-bl-xl border-none focus:outline-none"
        />
        <div className="relative right-0 h-full bg-white rounded-tr-xl rounded-br-xl w-14 fill-violet-600">
          <SearchIcon height={30} width={30} className="absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </>
  )
}
