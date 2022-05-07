import { Search as SearchIcon } from "icons"
export type SearchBoxProps = { onSearch: (val: string) => void }

export function Search({ onSearch }: SearchBoxProps) {
  return (
    <>
      <div className="search">
        <input type="search" onChange={(e: any) => onSearch(e.target.value)} placeholder="Search by title" />
        <div className="search__icon-box">
          <SearchIcon
            height={30}
            width={30}
            style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)" }}
          />
        </div>
      </div>
    </>
  )
}
