import { Search as SearchIcon } from "icons"
export type SearchBoxProps = { onSearch: (val: string) => void }

export function Search({ onSearch }: SearchBoxProps) {
  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          position: relative;
          height: 50px;
          width: 100%;
        }

        input {
          width: 100%;
          height: 100%;
          padding-left: 20px;
          padding-right: 40px;
          background-color: #f2f4f8;
          border-top-left-radius: 12px;
          border-bottom-left-radius: 12px;
          box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
          border: none;
        }

        .icon-box {
          position: relative;
          right: 0;
          height: 100%;
          background-color: #ddd;
          border-top-right-radius: 12px;
          border-bottom-right-radius: 12px;
          width: 60px;
        }
        /*TODO: why doesn't the jsx- class get applied to the svg? */
        .icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
      <div className="container">
        <input type="search" onChange={(e: any) => onSearch(e.target.value)} placeholder="Search for music" />
        <div className="icon-box">
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
