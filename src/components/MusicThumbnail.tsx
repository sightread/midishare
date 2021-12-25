import Link from "next/link"

export function MusicThumbnail() {
  return (
    <div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          width: 100px;
          max-width: 100px;
        }
        .image_thumb {
          width: 100px;
          height: 100px;
          background-color: #c4c4c4;
        }
        a {
          font-size: 14px;
          text-decoration: none;
          color: #2e68c0;
        }
        a.title {
          font-size: 18px;
        }
      `}</style>
      <div className="image_thumb" />
      <Link href={"/user/1/song/1"}>
        <a className="title">Fur Elise - Beethoven</a>
      </Link>
      <Link href={"/user/1"}>
        <a>samouri</a>
      </Link>
      <span style={{ fontSize: 12, color: "#64748B" }}>00:00</span>
      <span style={{ fontSize: 12, color: "#64748B" }}>Dec 1, 2021</span>
    </div>
  )
}
