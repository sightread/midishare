import { Search as SearchIcon } from "icons"
export type SearchBoxProps = { onSearch: (val: string) => void }

export function Search({ onSearch }: SearchBoxProps) {
  return (
    <div style={{ position: "relative", height: 50, width: "100%", display: "flex" }}>
      <input
        type="search"
        onChange={(e: any) => onSearch(e.target.value)}
        style={{
          width: "100%",
          height: "100%",
          paddingLeft: 20,
          paddingRight: 40,
          backgroundColor: "#F2F4F8",
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
          boxShadow: "inset 0px 1px 4px rgba(0, 0, 0, 0.25)",
          border: "none",
        }}
        placeholder="Search for music"
      />
      <div
        style={{
          position: "relative",
          right: 0,
          height: "100%",
          backgroundColor: "#DDDDDD",
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
          width: 60,
        }}
      >
        <SearchIcon
          height={30}
          width={30}
          style={{
            position: "absolute",
            left: 13,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      </div>
    </div>
  )
}
