import { Header, Spacer } from "components"
import { DownloadDropdown } from "components/DownloadDropdown"
import { getSongs } from "features/data"
import { NextPage } from "next"
import { useRouter } from "next/dist/client/router"

export const SongDetail: NextPage = (props, context) => {
  const router = useRouter()
  const { youtubeId } = router.query
  // On first render, next/router cannot figure out query.
  // See: https://github.com/vercel/next.js/discussions/11484
  if (!youtubeId) {
    return null
  }

  const song = getSongs().find((s) => s.youtubeId === youtubeId)!

  return (
    <div className="song_detail">
      <Header />
      <Spacer size={24} axis={"vertical"} />
      <main className="max-width-wrapper">
        <div className="title_artist">
          <span className="title">{song.title}</span>
          {song.artist && <span className="artist">{song.artist}</span>}
        </div>
        <Spacer axis="vertical" size={16} />
        <div style={{ height: 400, width: 600, backgroundColor: "grey", margin: "0 auto" }}>
          <iframe
            width="600"
            height="400"
            src={`https://www.youtube.com/embed/${youtubeId}?modestbranding=1&rel=0`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <Spacer axis="vertical" size={8} />
        <div style={{ display: "flex", width: 600, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="uploaded_by">
              Uploaded by <span className="uploader">{song.uploader}</span>
            </span>
            <span style={{ fontSize: 13, color: "#64748B" }}>
              Original source: <a href={song.originalSourceUrl}>{song.originalSourceType}</a>
            </span>
          </div>
          <span style={{ marginLeft: "auto" }}>
            <DownloadDropdown />
          </span>
        </div>
      </main>
    </div>
  )
}
